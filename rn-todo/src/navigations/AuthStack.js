import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={'SignIn'}>
      <Stack.Screen name={'List'} component={ListScreen} />
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
