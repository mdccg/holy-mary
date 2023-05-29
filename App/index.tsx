import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import Routes from './../src/routes';
import theme from './../src/stylesheets/theme';
import { AppWrapper } from './styles';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./../assets/fonts/Inter/Inter-Black.ttf'),
    'Inter-Bold': require('./../assets/fonts/Inter/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./../assets/fonts/Inter/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./../assets/fonts/Inter/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./../assets/fonts/Inter/Inter-Light.ttf'),
    'Inter-Medium': require('./../assets/fonts/Inter/Inter-Medium.ttf'),
    'Inter-Regular': require('./../assets/fonts/Inter/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./../assets/fonts/Inter/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./../assets/fonts/Inter/Inter-Thin.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if (!fontsLoaded) {
    return null;
  }

  return (
    <AppWrapper onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </AppWrapper>
  );
}