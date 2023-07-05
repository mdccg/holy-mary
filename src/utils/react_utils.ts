import { useEffect } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../routes';
import { useNavigation } from '@react-navigation/native';

type GenericScreenNavigationProp = StackNavigationProp<RootStackParamList>;

export const useFocus = (callbackFunction: () => void) => {
  const navigation = useNavigation<GenericScreenNavigationProp>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      callbackFunction();
    });

    return unsubscribe;
  }, [navigation]);
}