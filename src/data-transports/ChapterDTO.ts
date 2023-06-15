import BookDTO from './BookDTO';
import VerseDTO from './VerseDTO';

type ChapterDTO = {
  book: BookDTO;
  chapter: {
    number: number;
    verses: number;
  };
  verses: VerseDTO[];
}

export default ChapterDTO;