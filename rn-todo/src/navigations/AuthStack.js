import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PRIMARY, WHITE } from '../colors';
import ListScreen from '../screens/ListScreen';
import SignInScreen from '../screens/SignInScreen';
import HeaderLeftButton from '../components/HeaderLeftButton';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: { fontWeight: '700' },
        title: 'TODO List',
        headerBackTitleVisible: false,
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen name={'List'} component={ListScreen} />
      <Stack.Screen name={'Home'} component={SignInScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
