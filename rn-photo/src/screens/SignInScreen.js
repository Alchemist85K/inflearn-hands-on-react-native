import { Button, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { AuthRoutes } from '../navigations/routes';
import Input, { InputTypes } from '../components/Input';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignInScreen</Text>
      <Button
        title="signup"
        onPress={() => navigation.navigate(AuthRoutes.SIGN_UP)}
      />

      {/* <Input
        title={'EMAIL'}
        placeholder={'your@email.com'}
        iconName={'email'}
        keyboardType={KeyboardTypes.EMAIL}
      /> */}
      <Input inputType={InputTypes.EMAIL} />
      <Input inputType={InputTypes.PASSWORD} />
    </View>
  );
};

SignInScreen.propTypes = {
  // PropTypes
};

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
