import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './../../routes';
import ArrowLeft from './../icons/ArrowLeft';
import { IconContainer } from './styles';

type GenericScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const BackButton = () => {
  const navigation = useNavigation<GenericScreenNavigationProp>();

  return (
    <IconContainer onPress={navigation.goBack}>
      <ArrowLeft size={32} />
    </IconContainer>
  );
}

export default BackButton;