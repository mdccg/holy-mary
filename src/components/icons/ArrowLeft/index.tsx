import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import IconProps from './../../../types/IconProps';

const ArrowLeft = ({ size, color, solid }: IconProps) => (
  <FontAwesomeIcon name="arrow-left" size={size} color={color} solid={solid} />
);

export default ArrowLeft;