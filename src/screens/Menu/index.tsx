import { View } from 'react-native';
import CustomStatusBar from './../../components/CustomStatusBar';
import MenuOption from './../../components/MenuOption';
import { Heading, MenuWrapper } from './styles';

const Menu = () => {
  return (
    <>
      <CustomStatusBar />

      <MenuWrapper>
        <View>
          <Heading>Menu de opções</Heading>
          <MenuOption
            icon="book"
            subHeading="Escolha um livro"
            description="Escolha um livro do Antigo ou Novo Testamento para começar."
            screenName="BookSelector" />
          
          <MenuOption
            icon="language"
            subHeading="Mude a tradução"
            description="As palavras estão muito difíceis? Não se preocupe, nós deixamos elas mais fáceis para você."
            screenName="Translations" />
        </View>
      </MenuWrapper>
    </>
  );
}

export default Menu;