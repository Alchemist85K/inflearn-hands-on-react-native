import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AuthStack from './navigations/AuthStack';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
