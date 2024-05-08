import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { BLACK, GRAY, PRIMARY } from '../colors';
import { forwardRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const KeyboardTypes = {
  DEFAULT: 'default',
  EMAIL: 'email-address',
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

export const IconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};

const Input = forwardRef(
  (
    {
      title,
      placeholder,
      value,
      iconName,
      returnKeyType = ReturnKeyTypes.DONE,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={styles.container}>
        <Text
          style={[
            styles.title, // default
            value && styles.hasValueTitle, // value
            isFocused && styles.focusedTitle, // value + focus
          ]}
        >
          {title}
        </Text>

        <View>
          <TextInput
            ref={ref}
            {...props}
            value={value}
            style={[
              styles.input,
              value && styles.hasValueInput,
              isFocused && styles.focusedInput,
            ]}
            placeholder={placeholder ?? title}
            placeholderTextColor={GRAY.DEFAULT}
            autoCapitalize={'none'}
            autoCorrect={false}
            textContentType={'none'}
            keyboardAppearance={'light'}
            returnKeyType={returnKeyType}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />

          <View style={styles.icon}>
            <MaterialCommunityIcons
              name={iconName}
              size={20}
              color={(() => {
                switch (true) {
                  case isFocused:
                    return PRIMARY.DEFAULT;
                  case !!value:
                    return BLACK;
                  default:
                    return GRAY.DEFAULT;
                }
              })()}
            />
          </View>
        </View>
      </View>
    );
  }
);
Input.displayName = 'Input';

Input.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  iconName: PropTypes.oneOf(Object.values(IconNames)),
  returnKeyType: PropTypes.oneOf(Object.values(ReturnKeyTypes)),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 20,
    height: 42,
    paddingLeft: 30,
  },
  focusedInput: {
    borderWidth: 2,
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    borderColor: BLACK,
    color: BLACK,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
