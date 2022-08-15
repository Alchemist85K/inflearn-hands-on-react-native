import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return <Text>{title}</Text>;
};

Button.defaultProps = {
  title: 'Default',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
