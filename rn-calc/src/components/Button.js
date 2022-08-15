import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title }) => {
  return (
    <Pressable
      onPressIn={() => console.log('In')}
      onPressOut={() => console.log('Out')}
      onPress={() => console.log('onPress')}
      onLongPress={() => console.log('Long')}
      delayLongPress={2000}
      style={({ pressed }) => [
        { backgroundColor: 'red' },
        pressed && { backgroundColor: 'orange', opacity: 0.3 },
      ]}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: 'Default',
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
