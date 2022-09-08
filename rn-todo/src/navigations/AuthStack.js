import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen
        name={'SignIn'}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
