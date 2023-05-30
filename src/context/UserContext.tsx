import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  book: string;
  verse: number;
  chapter: number;
  translate: string;
  setBook: (newBook: string) => void;
  setVerse: (newVerse: number) => void;
  setChapter: (newChapter: number) => void;
  setTranslate: (newTranslate: string) => void;
}

const initialValue: UserContextType = {
  book: '',
  verse: NaN,
  chapter: NaN,
  translate: '',
  setBook: () => {},
  setVerse: () => {},
  setChapter: () => {},
  setTranslate: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [book, setBook] = useState<string>(initialValue.book);
  const [verse, setVerse] = useState<number>(initialValue.verse);
  const [chapter, setChapter] = useState<number>(initialValue.chapter);
  const [translate, setTranslate] = useState<string>(initialValue.translate);

  return (
    <UserContext.Provider value={{ book, verse, chapter, translate, setBook, setVerse, setChapter, setTranslate }}>
      {children}
    </UserContext.Provider>
  );
}