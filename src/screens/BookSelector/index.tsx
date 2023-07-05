import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useRef, useState } from 'react';
import BackButton from './../../components/BackButton';
import CustomStatusBar from './../../components/CustomStatusBar';
import Book from './../../components/icons/Book';
import MagnifyingGlass from './../../components/icons/MagnifyingGlass';
import BookDTO from './../../data-transports/BookDTO';
import books from './../../data/books.json';
import { RootStackParamList } from './../../routes';
import theme from './../../stylesheets/theme';
import { isSimilar } from './../../utils/sanitization_utils';
import { BookButtonContainer, BookButtonLabel, BookSelectorWrapper, GroupContainer, GroupLabel, Header, SearchInput, SearchInputContainer, SearchInputIconContainer, TestamentContainer, TestamentLabel } from './styles';

type BookButtonProps = {
  book: BookDTO;
}

type BookSelectorScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookSelector'>;

const BookButton = ({ book }: BookButtonProps) => {
  const { navigate } = useNavigation<BookSelectorScreenNavigationProp>();

  const handlePress = () => {
    navigate('ChapterSelector', { book });
  }

  return (
    <BookButtonContainer onPress={handlePress}>
      <Book size={16} />
      <BookButtonLabel>{book.name}</BookButtonLabel>
    </BookButtonContainer>
  );
}

const BookSelector = () => {
  const [search, setSearch] = useState<string>('');
  const searchInputRef = useRef(null);

  const handleFilter = (value: BookDTO): boolean => {
    if (!search.trim()) return true;
    return isSimilar(value.name, search);
  }

  const handleSearchInputContainerPress = () => {
    (searchInputRef.current as any).focus();
  }

  return (
    <>
      <CustomStatusBar />

      <BookSelectorWrapper>
        <Header>
          <BackButton />

          <SearchInputContainer onPress={handleSearchInputContainerPress} underlayColor="transparent">
            <>
              <SearchInputIconContainer>
                <MagnifyingGlass size={20} color={theme.colors.dracula_orchid} />
              </SearchInputIconContainer>
              <SearchInput
                placeholder="Nome do livro"
                placeholderTextColor={theme.colors.american_river}
                value={search}
                onChangeText={setSearch}
                ref={searchInputRef} />
            </>
          </SearchInputContainer>
        </Header>

        
        {Object.keys(books).map((stringTestament: string) => {
          const testament = stringTestament as keyof typeof books;
          const testamentLabel = testament === 'VT' ? 'Velho Testamento' : 'Novo Testamento';
          const testamentGroups = Object.keys(books[testament]);
          const testamentBooks = Object.values(books[testament]).flat() as BookDTO[];
          const filteredTestamentGroups = testamentGroups.filter((value) => isSimilar(value, search));
          const filteredTestamentBooks = testamentBooks.filter(handleFilter);
          const showTestament = filteredTestamentGroups.length > 0 || filteredTestamentBooks.length > 0;

          return showTestament && (
            <TestamentContainer key={testament}>
              <TestamentLabel key={testament}>{testamentLabel}</TestamentLabel>
              {Object.keys(books[testament]).map((stringGroup: string) => {
                const group = stringGroup as keyof typeof books[typeof testament];
                const groupBooks: BookDTO[] = books[testament][group];
                const showGroupAnyway = isSimilar(stringGroup, search);
                const filteredBooks = groupBooks.filter(showGroupAnyway ? () => true : handleFilter);

                return filteredBooks.length > 0 && (
                  <GroupContainer key={group}>
                    <GroupLabel>{stringGroup}</GroupLabel>
                    {filteredBooks.map((book) => <BookButton key={book.name} book={book} />)}
                  </GroupContainer>
                );
              })}
            </TestamentContainer>
          );
        })}

      </BookSelectorWrapper>
    </>
  );
}

export default BookSelector;