import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen
        name={'SignIn'}
        // component={SignInScreen}
        options={{
          headerShown: false,
        }}
      >
        {(screenProps) => <SignInScreen {...screenProps} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
