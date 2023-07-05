import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const StatusBarHeight = () => (
  <View style={{ height: getStatusBarHeight() }} />
);

export default StatusBarHeight;