import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import FontStyles from './../assets/fonts';
import StatusBarHeight from './../src/components/StatusBarHeight';
import Routes from './../src/routes';
import { AppWrapper } from './styles';

export default function App() {
  return (
    <AppWrapper>
      <StatusBar style="auto" translucent />
      <StatusBarHeight />
      <FontStyles />
      <Routes />
    </AppWrapper>
  );
}