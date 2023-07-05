import IconProps from './../../types/IconProps';
import { GenericPanelMessage, GenericPanelWrapper } from './styles';

type GenericPanelProps = {
  icon: (props: IconProps) => JSX.Element;
  message: string;
}

const GenericPanel = ({ icon: Icon, message }: GenericPanelProps) => {
  return (
    <GenericPanelWrapper>
      <Icon size={48} solid />
      <GenericPanelMessage>{message}</GenericPanelMessage>
    </GenericPanelWrapper>
  );
}

export default GenericPanel;