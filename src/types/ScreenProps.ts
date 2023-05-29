import type { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from './../routes';

type ScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

export default ScreenProps;