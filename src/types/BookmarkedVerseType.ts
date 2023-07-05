import BookDTO from './../data-transports/BookDTO';
import VerseDTO from './../data-transports/VerseDTO';

type BookmarkedVerseType = {
  book: BookDTO;
  chapter: number;
  verse: VerseDTO;
  translationAbbreviation: string;
}

export default BookmarkedVerseType;