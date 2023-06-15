import { useEffect, useState } from 'react';
import theme from './../../stylesheets/theme';
import BackButton from './../../components/BackButton';
import CustomStatusBar from './../../components/CustomStatusBar';
import ChevronLeft from './../../components/icons/ChevronLeft';
import ChevronRight from './../../components/icons/ChevronRight';
import BookDTO from './../../data-transports/BookDTO';
import raw_books from './../../data/raw_books.json';
import IconProps from './../../types/IconProps';
import ScreenProps from './../../types/ScreenProps';
import { BookName, BookNameContainer, ChapterButtonContainer, ChapterButtonGroup, ChapterButtonLabel, ChapterSelectionWrapper, NavigationButtonContainer, Testament } from './styles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../routes';

type ChapterSelectorProps = ScreenProps<'ChapterSelector'>;

type NavigationButtonProps = {
  icon: (props: IconProps) => JSX.Element;
  handlePress: () => void;
  disabled: boolean;
}

type ChapterButtonProps = {
  book: BookDTO;
  chapter: number;
}

type ChapterSelectorScreenNavigationProps = StackNavigationProp<RootStackParamList, 'ChapterSelector'>;

const NavigationButton = ({ icon: Icon, handlePress, disabled }: NavigationButtonProps) => (
  <NavigationButtonContainer onPress={handlePress} disabled={disabled}>
    <Icon size={16} color={disabled ? theme.colors.soothing_breeze : 'black'} />
  </NavigationButtonContainer>
);

const ChapterButton = ({ book, chapter }: ChapterButtonProps) => {
  const { navigate } = useNavigation<ChapterSelectorScreenNavigationProps>();

  const handlePress = () => {
    navigate('Lecture', { book, chapter });
  }
  
  return (
    <ChapterButtonContainer onPress={handlePress}>
      <ChapterButtonLabel>{chapter}</ChapterButtonLabel>
    </ChapterButtonContainer>
  );
}

const ChapterSelector = ({ route: { params: { book: initialBookValue } } }: ChapterSelectorProps) => {
  const [index, setIndex] = useState<number>(0);
  const [book, setBook] = useState<BookDTO>(initialBookValue);

  const getInitialIndexValue = () => {
    let index = raw_books.map(({ name }) => name).indexOf(book.name);
    setIndex(index);
  }

  const backward = () => {
    if (index === 0) return;
    let newIndex = index - 1;
    setIndex(newIndex);
    updateBook(newIndex);
  }

  const forward = () => {
    if (index === raw_books.length - 1) return;
    let newIndex = index + 1;
    setIndex(newIndex);
    updateBook(newIndex);
  }

  const updateBook = (index: number) => {
    let nextBook = raw_books.at(index) as BookDTO;
    setBook(nextBook);
  }

  useEffect(() => {
    getInitialIndexValue();
  }, []);

  return (
    <>
      <CustomStatusBar />

      <ChapterSelectionWrapper>
        <BackButton />

        <Testament>{book.testament === 'VT' ? 'Velho Testamento' : 'Novo Testamento'}</Testament>

        <BookNameContainer>
          <NavigationButton icon={ChevronLeft} handlePress={backward} disabled={index === 0} />
          <BookName>{book.name}</BookName>
          <NavigationButton icon={ChevronRight} handlePress={forward} disabled={index === raw_books.length - 1} />
        </BookNameContainer>

        <ChapterButtonGroup>
          {Array(book.chapters)
            .fill(null)
            .map((_, index) => index + 1)
            .map((value) => (
              <ChapterButton
                key={value}
                book={book}
                chapter={value} />
            ))}
        </ChapterButtonGroup>
      </ChapterSelectionWrapper>
    </>
  );
}

export default ChapterSelector;