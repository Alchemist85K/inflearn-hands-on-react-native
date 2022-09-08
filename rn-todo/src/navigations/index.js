import { NavigationContainer } from '@react-navigation/native';
import { useUserContext } from '../contexts/UserContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Navigation = () => {
  const { user } = useUserContext();

  return (
    <NavigationContainer>
      {user ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
