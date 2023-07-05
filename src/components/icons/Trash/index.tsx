import Icon from 'react-native-vector-icons/FontAwesome5';
import IconProps from './../../../types/IconProps';

const Trash = ({ size, color, solid }: IconProps) => (
  <Icon name="trash" size={size} color={color} solid={solid} />
);

export default Trash;