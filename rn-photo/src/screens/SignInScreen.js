import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { AuthRoutes } from '../navigations/routes';
import Input, { InputTypes } from '../components/Input';
import { useState } from 'react';
import Button from '../components/Button';
import SafeInputView from '../components/SafeInputView';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeInputView>
      <View style={styles.container}>
        <Text style={styles.title}>SignInScreen</Text>

        <Input
          inputType={InputTypes.EMAIL}
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          styles={{
            container: { paddingHorizontal: 20, marginBottom: 20 },
          }}
        />

        <Input
          inputType={InputTypes.PASSWORD}
          value={password}
          onChangeText={(text) => setPassword(text.trim())}
          styles={inputStyles}
        />

        <Button
          title={'SIGNIN'}
          onPress={() => {
            navigation.navigate(AuthRoutes.SIGN_UP);
          }}
          styles={{
            container: {
              paddingHorizontal: 20,
              marginTop: 20,
            },
          }}
        />
      </View>
    </SafeInputView>
  );
};

SignInScreen.propTypes = {
  // PropTypes
};

const inputStyles = StyleSheet.create({
  container: { paddingHorizontal: 20, marginBottom: 20 },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default SignInScreen;
