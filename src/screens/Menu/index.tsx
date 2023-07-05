import { View } from 'react-native';
import CustomStatusBar from './../../components/CustomStatusBar';
import MenuOption from './../../components/MenuOption';
import Book from './../../components/icons/Book';
import Bookmark from './../../components/icons/Bookmark';
import Language from './../../components/icons/Language';
import ScreenProps from './../../types/ScreenProps';
import { Heading, MeetTheTeamButton, MeetTheTeamButtonText, MenuWrapper } from './styles';

type MenuProps = ScreenProps<'Menu'>;

const Menu = ({ navigation }: MenuProps) => {
  const handlePress = () => {
    navigation.navigate('MeetTheTeam');
  }

  return (
    <>
      <CustomStatusBar />

      <MenuWrapper>
        <View>
          <Heading>Menu de opções</Heading>
          <MenuOption
            icon={Book}
            subHeading="Escolha um livro"
            description="Escolha um livro do Velho ou Novo Testamento para começar."
            screenName="BookSelector" />
            
          <MenuOption
            icon={Bookmark}
            isIconSolid
            subHeading="Marcadores"
            description="Não se perca na leitura, volte exatamente ao versículo em que você parou e marque quantos versículos você precisar."
            screenName="Bookmarks" />
          
          <MenuOption
            icon={Language}
            subHeading="Mude a tradução"
            description="As palavras estão muito difíceis? Não se preocupe, nós deixamos elas mais fáceis para você."
            screenName="Translations" />
        </View>
      
        <MeetTheTeamButton onPress={handlePress}>
          <MeetTheTeamButtonText>Conheça a equipe</MeetTheTeamButtonText>
        </MeetTheTeamButton>
      </MenuWrapper>
    </>
  );
}

export default Menu;