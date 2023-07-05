import { createContext, ReactNode, useState } from 'react';
import BookmarkedVerseType from './../types/BookmarkedVerseType';

type UserContextType = {
  bookmarkedVerses: BookmarkedVerseType[];
  translationAbbreviation: string;
  setBookmarkedVerses: (bookmarkedVerses: BookmarkedVerseType[] | ((state: BookmarkedVerseType[]) => BookmarkedVerseType[])) => void;
  setTranslationAbbreviation: (newTranslation: string) => void;
}

const initialValue: UserContextType = {
  bookmarkedVerses: [],
  translationAbbreviation: 'acf',
  setBookmarkedVerses: () => {},
  setTranslationAbbreviation: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [translationAbbreviation, setTranslationAbbreviation] = useState<string>(initialValue.translationAbbreviation);
  const [bookmarkedVerses, setBookmarkedVerses] = useState<BookmarkedVerseType[]>(initialValue.bookmarkedVerses);

  return (
    <UserContext.Provider value={{ translationAbbreviation, bookmarkedVerses, setTranslationAbbreviation, setBookmarkedVerses }}>
      {children}
    </UserContext.Provider>
  );
}