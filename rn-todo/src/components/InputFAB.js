import {
  Animated,
  Keyboard,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { BLACK, PRIMARY, WHITE } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';

const BOTTOM = 30;
const BUTTON_WIDTH = 60;

const InputFAB = () => {
  const [text, setText] = useState('');
  const [isOpened, setIsOpened] = useState(false);
  const inputRef = useRef(null);
  const windowWidth = useWindowDimensions().width;
  const [keyboardHeight, setKeyboardHeight] = useState(BOTTOM);

  const inputWidth = useRef(new Animated.Value(BUTTON_WIDTH)).current;

  const open = () => {
    setIsOpened(true);
    Animated.timing(inputWidth, {
      toValue: windowWidth - 20,
      useNativeDriver: false,
      duration: 300,
    }).start(() => {
      inputRef.current.focus();
    });
  };

  const close = () => {
    setIsOpened(false);
    Animated.timing(inputWidth, {
      toValue: BUTTON_WIDTH,
      useNativeDriver: false,
      duration: 300,
    }).start(() => {
      inputRef.current.blur();
    });
  };

  const onPressButton = () => (isOpened ? close() : open());

  useEffect(() => {
    const show = Keyboard.addListener('keyboardWillShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height + BOTTOM);
    });
    const hide = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardHeight(BOTTOM);
    });

    return () => {
      show.remove();
      hide.remove();
    };
  }, []);

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          styles.shadow,
          {
            bottom: keyboardHeight,
            alignItems: 'flex-start',
            width: inputWidth,
          },
        ]}
      >
        <TextInput
          ref={inputRef}
          value={text}
          onChangeText={setText}
          style={styles.input}
          autoCapitalize={'none'}
          autoCorrect={false}
          textContentType={'none'}
          keyboardAppearance={'light'}
          returnKeyType={'done'}
          onBlur={close}
        />
      </Animated.View>

      <Pressable
        onPress={onPressButton}
        style={({ pressed }) => [
          styles.container,
          // styles.shadow,
          { bottom: keyboardHeight },
          pressed && { backgroundColor: PRIMARY.DARK },
        ]}
      >
        <MaterialCommunityIcons name="plus" size={24} color={WHITE} />
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: BOTTOM,
    right: 10,
    width: BUTTON_WIDTH,
    height: BUTTON_WIDTH,
    borderRadius: BUTTON_WIDTH / 2,
    backgroundColor: PRIMARY.DEFAULT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    color: WHITE,
    paddingLeft: 20,
    paddingRight: BUTTON_WIDTH + 10,
  },
  shadow: {
    shadowColor: BLACK,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
      android: { elevation: 5 },
    }),
  },
});

export default InputFAB;
