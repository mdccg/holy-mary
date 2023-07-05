import { View } from 'react-native';
import WelcomeScreenBackgroundSource from './../../../assets/images/welcome-screen-background.jpg';
import CustomStatusBar from './../../components/CustomStatusBar';
import ScreenProps from './../../types/ScreenProps';
import { DarkOverlay, StartButton, StartButtonText, SubTitle, Title, WelcomeWrapper, WelcomeWrapperContent } from './styles';
import { useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from './../../context/UserContext';
import BookmarkedVerseType from './../../types/BookmarkedVerseType';

type WelcomeProps = ScreenProps<'Welcome'>;

const Welcome = ({ navigation, route }: WelcomeProps) => {
  const { setTranslationAbbreviation, setBookmarkedVerses } = useContext(UserContext);

  const handlePress = () => {
    navigation.navigate('Menu');
  }
  
  const loadLocalStorageVariables = async () => {
    const translationAbbreviation = await AsyncStorage.getItem('@translation_Abbreviation');
    const stringBookmarkedVerses = await AsyncStorage.getItem('@bookmarked_Verses');
    
    if (translationAbbreviation !== null) {
      setTranslationAbbreviation(`${translationAbbreviation}`);
    }

    if (stringBookmarkedVerses !== null) {
      const bookmarkedVerses = JSON.parse(stringBookmarkedVerses) as BookmarkedVerseType[];
      setBookmarkedVerses(bookmarkedVerses);
    }
  }

  useEffect(() => {
    loadLocalStorageVariables();
  }, []);

  return (
    <>
      <CustomStatusBar routeName={route.name} />

      <WelcomeWrapper source={WelcomeScreenBackgroundSource}>
        <DarkOverlay />
        <WelcomeWrapperContent>
          <View>
            <Title>Bíblia Interativa</Title>
            <SubTitle>Explore as Escrituras Sagradas de forma moderna e acessível</SubTitle>
          </View>

          <StartButton onPress={handlePress}>
            <StartButtonText>Começar</StartButtonText>
          </StartButton>
        </WelcomeWrapperContent>
      </WelcomeWrapper>
    </>
  );
}

export default Welcome;