import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import SignInScreen from './screens/SignInScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <SignInScreen />
    </NavigationContainer>
  );
};

export default App;
