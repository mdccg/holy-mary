import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import IconProps from './../../../types/IconProps';

const Book = ({ size, color, solid }: IconProps) => (
  <FontAwesomeIcon name="book" size={size} color={color} solid={solid} />
);

export default Book;