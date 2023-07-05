import Icon from 'react-native-vector-icons/FontAwesome5';
import IconProps from './../../../types/IconProps';

const Language = ({ size, color, solid }: IconProps) => (
  <Icon name="language" size={size} color={color} solid={solid} />
);

export default Language;