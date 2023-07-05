import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useEffect, useState } from 'react';
import { Share, ToastAndroid } from 'react-native';
import BookmarkedVerseType from './../../types/BookmarkedVerseType';
import CustomStatusBar from './../../components/CustomStatusBar';
import LoadingPanel from './../../components/LoadingPanel';
import Bookmark from './../../components/icons/Bookmark';
import ChevronLeft from './../../components/icons/ChevronLeft';
import ChevronRight from './../../components/icons/ChevronRight';
import FormatFontSizeIncrease from './../../components/icons/FormatFontSizeIncrease';
import SelectionRemove from './../../components/icons/SelectionRemove';
import ShareAlt from './../../components/icons/ShareAlt';
import { UserContext } from './../../context/UserContext';
import BookDTO from './../../data-transports/BookDTO';
import VerseDTO from './../../data-transports/VerseDTO';
import raw_books from './../../data/raw_books.json';
import BibleService from './../../services/BibleService';
import ScreenProps from './../../types/ScreenProps';
import { useFocus } from './../../utils/react_utils';
import { capitalize, getMessage, getSignature } from './../../utils/sanitization_utils';
import { ButtonGroup, ButtonLabel, ChangeChapterButton, ChangeTranslationButton, ChangeTranslationButtonLabel, Header, IconContainer, IconGroup, LectureWrapper, LeftNavigationButton, MainText, RightNavigationButton, Verse, VerseNumber, VerseText } from './styles';

type LectureScreenProps = ScreenProps<'Lecture'>;

const Lecture = ({ navigation, route: { params: { book: initialBookValue, chapter: initialChapterValue } } }: LectureScreenProps) => {
  const { translationAbbreviation: initialTranslationAbbreviationValue, bookmarkedVerses, setBookmarkedVerses } = useContext(UserContext);
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

  const handleChangeTranslationButtonPress = () => {
    navigation.navigate('Translations');
  }

  const handleVersePress = (newSelectedVerse: VerseDTO) => {
    const isAlreadySelected = selectedVerses.map(({ number }) => number).includes(newSelectedVerse.number);

    if (isAlreadySelected) {
      setSelectedVerses(selectedVerses => selectedVerses.filter(({ number }) => number !== newSelectedVerse.number));
    } else {
      setSelectedVerses(selectedVerses => [...selectedVerses, newSelectedVerse]);
    }
  }

  const bookmarkVerse = () => {
    const signatures = bookmarkedVerses.map(({ book, chapter, verse }) => getSignature(book, chapter, [verse]));
    const verse = selectedVerses.at(0) as VerseDTO;
    const currentSignature = getSignature(book, chapter, [verse]);

    if (signatures.includes(currentSignature)) {
      ToastAndroid.show('Este versículo já foi marcado anteriormente.', 1e3);
      undoAllSelections();
      return;
    }
    
    const bookmarkedVerse: BookmarkedVerseType = { book, chapter, verse, translationAbbreviation, };

    setBookmarkedVerses((state: BookmarkedVerseType[]) => {
      let bookmarkedVerses = [...state, bookmarkedVerse];
      AsyncStorage.setItem('@bookmarked_Verses', JSON.stringify(bookmarkedVerses));
      return bookmarkedVerses;
    });

    ToastAndroid.show('Versículo marcado com sucesso.', 1e3);
    undoAllSelections();
  }

  const undoAllSelections = () => {
    setSelectedVerses([]);
  }

  const shareSelectedVerses = () => {
    Share.share({
      message: getMessage(book, chapter, selectedVerses)
    });
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

  useFocus(() => {
    const loadCorrectTranslation = async () => {
      let translationAbbreviation = await AsyncStorage.getItem('@translation_Abbreviation');
      setTranslationAbbreviation(`${translationAbbreviation}`);
    }

    loadCorrectTranslation();
  });

  return (
    <>
      <CustomStatusBar />
      
      <Header>
        <ButtonGroup>
          <ChangeChapterButton onPress={handleChangeChapterButtonPress}>
            <ButtonLabel>{bookName} {chapter}</ButtonLabel>
          </ChangeChapterButton>

          <ChangeTranslationButton onPress={handleChangeTranslationButtonPress}>
            <ChangeTranslationButtonLabel>{translationAbbreviation}</ChangeTranslationButtonLabel>
          </ChangeTranslationButton>
        </ButtonGroup>

        <IconGroup>
          {selectedVerses.length === 1 && (
            <IconContainer onPress={bookmarkVerse}>
              <Bookmark size={16} solid />
            </IconContainer>
          )}

          {selectedVerses.length > 0 && (
            <>
              <IconContainer onPress={undoAllSelections}>
                <SelectionRemove size={16} />
              </IconContainer>

              <IconContainer onPress={shareSelectedVerses}>
                <ShareAlt size={16} />
              </IconContainer>
            </>
          )}

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
              const isSelected = selectedVerses.map(({ number }) => number).includes(verse.number);

              return (
                <Verse
                  key={verse.number}
                  style={{
                    backgroundColor: isSelected ? 'yellow' : 'transparent'
                  }}
                  onPress={() => handleVersePress(verse)}>
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