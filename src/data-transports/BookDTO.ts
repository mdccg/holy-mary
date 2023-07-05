type BookDTO = {
  abbrev: {
    pt: string;
    en: string;
  };
  author: string;
  chapters: number;
  group: string;
  name: string;
  testament: 'VT' | 'NT';
}

export default BookDTO;