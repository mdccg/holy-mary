import { useContext, useEffect, useState } from 'react';
import CustomStatusBar from './../../components/CustomStatusBar';
import LoadingPanel from './../../components/LoadingPanel';
import ChevronLeft from './../../components/icons/ChevronLeft';
import ChevronRight from './../../components/icons/ChevronRight';
import FormatFontSizeIncrease from './../../components/icons/FormatFontSizeIncrease';
import { UserContext } from './../../context/UserContext';
import BookDTO from './../../data-transports/BookDTO';
import VerseDTO from './../../data-transports/VerseDTO';
import raw_books from './../../data/raw_books.json';
import BibleService from './../../services/BibleService';
import ScreenProps from './../../types/ScreenProps';
import { capitalize } from './../../utils/sanitization_utils';
import { ButtonGroup, ButtonLabel, ChangeChapterButton, Translation, TranslationLabel, Header, IconContainer, IconGroup, LectureWrapper, LeftNavigationButton, MainText, RightNavigationButton, Verse, VerseNumber, VerseText } from './styles';

type LectureScreenProps = ScreenProps<'Lecture'>;

const Lecture = ({ navigation, route: { params: { book: initialBookValue, chapter: initialChapterValue } } }: LectureScreenProps) => {
  const { translationAbbreviation: initialTranslationAbbreviationValue } = useContext(UserContext);
  const [translationAbbreviation, setTranslationAbbreviation] = useState<string>(initialTranslationAbbreviationValue);
  const [book, setBook] = useState<BookDTO>(initialBookValue);
  const [chapter, setChapter] = useState<number>(initialChapterValue);
  const [bookName, setBookName] = useState<string>('');
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [bibleService] = useState<BibleService>(new BibleService());
  const [verses, setVerses] = useState<VerseDTO[]>([]);
  const [selectedVerses, setSelectedVerses] = useState<VerseDTO[]>([]);
  const [fontSize, setFontSize] = useState<number>(16);

  const handleChangeChapterButtonPress = () => {
    navigation.goBack();
  }

  const increaseFontSize = () => {
    const fontSizes = [16, 18, 20, 22];
    const currentIndex = fontSizes.indexOf(fontSize);
    let newFontSize = fontSizes[(currentIndex + 1) % fontSizes.length];
    setFontSize(newFontSize);
  }

  const getBookName = () => {
    let bookName = book.name.length > 10 ? capitalize(book.abbrev.pt) : book.name;
    setBookName(bookName);
  }

  const reset = () => {
    setIsFetching(true);
    setVerses([]); 
    setSelectedVerses([]);
  }

  const fetchChapter = async () => {
    reset();

    let verses = await bibleService.retrieveVersesByChapter(
      translationAbbreviation,
      book.abbrev.pt,
      chapter
    );
    setVerses(verses);

    setIsFetching(false);
  }

  const backward = () => {
    if (chapter === 1) {
      const index = raw_books.map(({ name }) => name).indexOf(book.name);
      let newBook = raw_books.at(index - 1) as BookDTO;
      setBook(newBook);
      setChapter(newBook.chapters);
      return;
    }

    setChapter(chapter - 1);
  }

  const forward = () => {
    if (chapter + 1 > book.chapters) {
      const index = raw_books.map(({ name }) => name).indexOf(book.name);
      let newBook = raw_books.at(index + 1) as BookDTO;
      setBook(newBook);
      setChapter(1);
      return;
    }

    setChapter(chapter + 1);
  }

  useEffect(() => {
    getBookName();
  }, [book]);

  useEffect(() => {
    fetchChapter();
  }, [translationAbbreviation, book, chapter]);

  return (
    <>
      <CustomStatusBar />
      
      <Header>
        <ButtonGroup>
          <ChangeChapterButton onPress={handleChangeChapterButtonPress}>
            <ButtonLabel>{bookName} {chapter}</ButtonLabel>
          </ChangeChapterButton>

          <Translation>
            <TranslationLabel>{translationAbbreviation}</TranslationLabel>
          </Translation>
        </ButtonGroup>

        <IconGroup>
          <IconContainer onPress={increaseFontSize}>
            <FormatFontSizeIncrease size={20} />
          </IconContainer>
        </IconGroup>
      </Header>

      <LectureWrapper contentContainerStyle={isFetching ? { flex: 1 } : {}}>
        {isFetching && <LoadingPanel />}

        {!isFetching && (
          <MainText style={{ fontSize }}>
            {verses.map((verse) => {
              return (
                <Verse key={verse.number}>
                  <VerseNumber>&nbsp;{verse.number}&nbsp;</VerseNumber>
                  <VerseText>{verse.text}</VerseText>
                </Verse>
              );
            })}
          </MainText>
        )}
      </LectureWrapper>

      {!(bookName === 'Gênesis' && chapter === 1) && (
        <LeftNavigationButton onPress={backward}>
          <ChevronLeft size={16} color="white" />
        </LeftNavigationButton>
      )}

      {!(bookName === 'Apocalipse' && chapter === 22) && (
        <RightNavigationButton onPress={forward}>
          <ChevronRight size={16} color="white" />
        </RightNavigationButton>
      )}
    </>
  );
}

export default Lecture;