import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import theme from './../../stylesheets/theme';
import { LoadingPanelWrapper } from './styles';

type LoadingPanelProps = {
  style?: StyleProp<ViewStyle>;
}

const LoadingPanel = (props: LoadingPanelProps) => (
  <LoadingPanelWrapper {...props}>
    <ActivityIndicator size={64} color={theme.colors.dracula_orchid} />
  </LoadingPanelWrapper>
);

export default LoadingPanel;