import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {user ? <MainStack /> : <AuthStack setUser={setUser} />}
    </NavigationContainer>
  );
};

export default App;
