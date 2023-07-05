import { StatusBar } from 'expo-status-bar';
import StatusBarHeight from './../StatusBarHeight';
import type { RootStackParamList } from './../../routes';

type CustomStatusBarProps = {
  routeName?: keyof RootStackParamList;
}

const CustomStatusBar = ({ routeName }: CustomStatusBarProps) => {
  return (
    <>
      <StatusBar style={routeName === 'Welcome' ? 'light' : 'auto'} />
      {routeName !== 'Welcome' && <StatusBarHeight />}
    </>
  );
}

export default CustomStatusBar;