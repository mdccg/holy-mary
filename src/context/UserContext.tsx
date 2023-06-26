import { createContext, ReactNode, useState } from 'react';

type UserContextType = {
  translationAbbreviation: string;
  setTranslationAbbreviation: (newTranslation: string) => void;
}

const initialValue: UserContextType = {
  translationAbbreviation: 'acf',
  setTranslationAbbreviation: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [translationAbbreviation, setTranslationAbbreviation] = useState<string>(initialValue.translationAbbreviation);

  return (
    <UserContext.Provider value={{ translationAbbreviation, setTranslationAbbreviation }}>
      {children}
    </UserContext.Provider>
  );
}