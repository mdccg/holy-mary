import BookDTO from './../data-transports/BookDTO';
import VerseDTO from './../data-transports/VerseDTO';

type SequenceType = ({ initialVerse: number, finalVerse: number })[];

const sanitize = (value: string): string => (
  value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase()
);

export const isSimilar = (value: string, search: string): boolean => (
  sanitize(value).includes(sanitize(search))
);

export const capitalize = (value: string) => value.at(0)?.toUpperCase() + value.slice(1);

const orderVerses = (verses: VerseDTO[]): VerseDTO[] =>
  verses.sort((a, b) => a.number - b.number);

const getSequences = (verses: VerseDTO[]): SequenceType => {
  verses = orderVerses(verses);

  let initialVerse = verses[0].number;
  let finalVerse;
  const sequences: SequenceType = [];

  for (let i = 1; i < verses.length; ++i) {
    if (verses[i].number !== verses[i - 1].number + 1) {
      finalVerse = verses[i - 1].number;
      sequences.push({ initialVerse, finalVerse });
      initialVerse = verses[i].number;
    }
  }

  finalVerse = verses[verses.length - 1].number;
  sequences.push({ initialVerse, finalVerse });

  return sequences;
}

export const getSignature = (book: BookDTO, chapter: number, verses: VerseDTO[]): string => {
  const sequences = getSequences(verses);

  return `${book.name} ${chapter}:` + sequences.map(({ initialVerse, finalVerse }) => {
    return initialVerse === finalVerse ? initialVerse : `${initialVerse}-${finalVerse}`;
  }).join(',');
}

export const getMessage = (book: BookDTO, chapter: number, verses: VerseDTO[]): string => {
  let message: string = orderVerses(verses).map(({ text }) => text).join('\n');
  message += '\n'.repeat(2);
  message += getSignature(book, chapter, verses);

  return message;
}