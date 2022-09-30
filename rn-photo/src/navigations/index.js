import { NavigationContainer } from '@react-navigation/native';
import { useUserState } from '../contexts/UserContext';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Navigation = () => {
  const [user] = useUserState();

  return (
    <NavigationContainer>
      {user.uid ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
