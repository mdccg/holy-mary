import CustomStatusBar from './../../components/CustomStatusBar';
import ScreenProps from './../../types/ScreenProps';

type MenuProps = ScreenProps<'Menu'>;

const Menu = (props: MenuProps) => {

  return (
    <>
      <CustomStatusBar />
    </>
  );
}

export default Menu;