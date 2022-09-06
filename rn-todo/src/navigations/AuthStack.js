import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'SignIn'}
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen name={'List'} component={ListScreen} />
      <Stack.Screen name={'SignIn'} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
