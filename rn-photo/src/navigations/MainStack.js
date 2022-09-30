import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WHITE } from '../colors';
import ProfileScreen from '../screens/ProfileScreen';
import { MainRoutes } from './routes';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
      }}
    >
      <Stack.Screen name={MainRoutes.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
