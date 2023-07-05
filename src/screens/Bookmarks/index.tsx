import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useEffect, useState } from 'react';
import BackButton from './../../components/BackButton';
import CustomStatusBar from './../../components/CustomStatusBar';
import GenericPanel from './../../components/GenericPanel';
import Bookmark from './../../components/icons/Bookmark';
import Trash from './../../components/icons/Trash';
import { UserContext } from './../../context/UserContext';
import theme from './../../stylesheets/theme';
import BookmarkedVerseType from './../../types/BookmarkedVerseType';
import ScreenProps from './../../types/ScreenProps';
import { getSignature } from './../../utils/sanitization_utils';
import { BookmarkedVerse, BookmarksWrapper, DeleteSelectedBookmarkedVersesButton, DeleteSelectedBookmarkedVersesButtonLabel, Footer, Heading, Signature, Verse } from './styles';

type BookmarksProps = ScreenProps<'ChapterSelector'>;

const Bookmarks = ({ navigation }: BookmarksProps) => {
  const { bookmarkedVerses, setBookmarkedVerses, setTranslationAbbreviation } = useContext(UserContext);
  const [selectedBookmarkedVerses, setSelectedBookmarkedVerses] = useState<BookmarkedVerseType[]>([]);
  const [signatures, setSignatures] = useState<string[]>([]);

  const handleBookmarkedVerseLongPress = (bookmarkedVerse: BookmarkedVerseType) => {
    const { book, chapter, verse } = bookmarkedVerse;
    const signature = getSignature(book, chapter, [verse]);
    const isSelected = signatures.includes(signature);

    if (isSelected) {
      setSelectedBookmarkedVerses((state) => state.filter(({ book, chapter, verse }) => getSignature(book, chapter, [verse]) !== signature));
    } else {
      setSelectedBookmarkedVerses((state) => [...state, bookmarkedVerse]);
    }
  }

  const deleteBookmarkedSelectedVerses = () => {
    setBookmarkedVerses((state) => {
      let bookmarkedVerses = state.filter(({ book, chapter, verse }) => !signatures.includes(getSignature(book, chapter, [verse])));
      AsyncStorage.setItem('@bookmarked_Verses', JSON.stringify(bookmarkedVerses));
      return bookmarkedVerses;
    });

    undoAllSelections();
  }

  const getAllSignatures = () => {
    let signatures = selectedBookmarkedVerses.map(({ book, chapter, verse }) => getSignature(book, chapter, [verse]));
    setSignatures(signatures);
  }

  const undoAllSelections = () => {
    setSelectedBookmarkedVerses([]);
  }
  
  useEffect(() => {
    getAllSignatures();
  }, [selectedBookmarkedVerses]);

  return (
    <>
      <CustomStatusBar />

      <BookmarksWrapper>
        <BackButton />

        <Heading>Marcadores</Heading>

        {bookmarkedVerses.length === 0 && (
          <GenericPanel icon={Bookmark} message="Você ainda não tem versículos marcados" />
        )}

        {bookmarkedVerses.map((bookmarkedVerse) => {
          const { book, chapter, verse, translationAbbreviation } = bookmarkedVerse; 
          const signature = getSignature(book, chapter, [verse]);
          const isSelected = signatures.includes(signature);
          const backgroundColor = isSelected ? theme.colors.alizarin : 'transparent';
          const signatureColor = isSelected ? 'white' : theme.colors.dracula_orchid;
          const verseColor = isSelected ? 'white' : theme.colors.american_river;

          const onPress = selectedBookmarkedVerses.length > 0 ?
            () => handleBookmarkedVerseLongPress(bookmarkedVerse) :
            async () => {
              setTranslationAbbreviation(translationAbbreviation);
              await AsyncStorage.setItem('@translation_Abbreviation', translationAbbreviation);
              navigation.navigate('Lecture', { book, chapter });
            };
          
          return (
            <BookmarkedVerse
              style={{ backgroundColor }}
              key={signature}
              onPress={onPress}
              onLongPress={() => handleBookmarkedVerseLongPress(bookmarkedVerse)}>
              <Signature style={{ color: signatureColor }}>{signature}</Signature>
              <Verse style={{ color: verseColor }} numberOfLines={1}>{verse.text}</Verse>
            </BookmarkedVerse>
          );
        })}

      </BookmarksWrapper>
    
      {selectedBookmarkedVerses.length > 0 && (
        <Footer>
          <DeleteSelectedBookmarkedVersesButton onPress={deleteBookmarkedSelectedVerses}>
            <Trash size={16} color={theme.colors.alizarin} />
            <DeleteSelectedBookmarkedVersesButtonLabel>Excluir</DeleteSelectedBookmarkedVersesButtonLabel>
          </DeleteSelectedBookmarkedVersesButton>
        </Footer>
      )}
    </>
  );
}

export default Bookmarks;