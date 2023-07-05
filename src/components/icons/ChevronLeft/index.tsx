import Icon from 'react-native-vector-icons/FontAwesome5';
import IconProps from './../../../types/IconProps';

const ChevronLeft = ({ size, color, solid }: IconProps) => (
  <Icon name="chevron-left" size={size} color={color} solid={solid} />
);

export default ChevronLeft;