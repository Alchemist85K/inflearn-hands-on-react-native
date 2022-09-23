import { StyleSheet, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const InputTypes = {
  EMAIL: 'EMAIL',
  PASSWORD: 'PASSWORD',
};

const InputTypeProps = {
  EMAIL: {
    title: 'EMAIL',
    placeholder: 'your@email.com',
    keyboardType: 'email-address',
    secureTextEntry: false,
    iconName: { active: 'email', inactive: 'email-outline' },
  },
  PASSWORD: {
    title: 'PASSWORD',
    placeholder: 'PASSWORD',
    keyboardType: 'default',
    secureTextEntry: true,
    iconName: { active: 'lock', inactive: 'lock-outline' },
  },
};

export const ReturnKeyTypes = {
  DONE: 'done',
  NEXT: 'next',
};

const Input = forwardRef(({ inputType, ...props }, ref) => {
  const {
    title,
    placeholder,
    keyboardType,
    secureTextEntry,
    iconName: { active, inactive },
  } = InputTypeProps[inputType];

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View>
        <TextInput
          ref={ref}
          {...props}
          style={[styles.input]}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={isFocused ? active : inactive}
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
});
Input.displayName = 'Input';

Input.propTypes = {
  inputType: PropTypes.oneOf(Object.values(InputTypes)),
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    marginBottom: 4,
    fontWeight: '700',
  },
  input: {
    borderBottomWidth: 1,
    height: 42,
    paddingHorizontal: 10,
    paddingLeft: 40,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
