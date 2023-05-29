import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RootStackParamList } from './../../routes';
import { MenuOptionContent, MenuOptionDescription, MenuOptionIconContainer, MenuOptionSubHeading, MenuOptionWrapper } from './styles';

type MenuOptionProps = {
  icon: string;
  isIconSolid?: boolean;
  subHeading: string;
  description: string;
  screenName: keyof RootStackParamList;
}

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Menu'>;

const MenuOption = ({
  icon,
  isIconSolid,
  subHeading,
  description,
  screenName
}: MenuOptionProps) => {
  const { navigate } = useNavigation<MenuScreenNavigationProp>();

  const handlePress = () => {
    navigate(screenName);
  }
  
  return (
    <MenuOptionWrapper onPress={handlePress}>
      <MenuOptionIconContainer>
        <Icon name={icon} size={20} solid={isIconSolid} />
      </MenuOptionIconContainer>

      <MenuOptionContent>
        <MenuOptionSubHeading>{subHeading}</MenuOptionSubHeading>
        <MenuOptionDescription>{description}</MenuOptionDescription>
      </MenuOptionContent>
    </MenuOptionWrapper>
  );
}

export default MenuOption;