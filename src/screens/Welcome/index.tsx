import { View } from 'react-native';
import WelcomeScreenBackgroundSource from './../../../assets/images/welcome-screen-background.jpg';
import CustomStatusBar from './../../components/CustomStatusBar';
import ScreenProps from './../../types/ScreenProps';
import { DarkOverlay, StartButton, StartButtonText, SubTitle, Title, WelcomeWrapper, WelcomeWrapperContent } from './styles';

type WelcomeProps = ScreenProps<'Welcome'>;

const Welcome = ({ navigation, route }: WelcomeProps) => {
  const handlePress = () => {
    navigation.navigate('Menu');
  }
  
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