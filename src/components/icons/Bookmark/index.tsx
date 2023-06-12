import Icon from 'react-native-vector-icons/FontAwesome5';
import IconProps from './../../../types/IconProps';

const Bookmark = ({ size, color, solid }: IconProps) => (
  <Icon name="bookmark" size={size} color={color} solid={solid} />
);

export default Bookmark;