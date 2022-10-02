import { Button, StyleSheet, Text, View } from 'react-native';
import { signOut } from '../api/auth';
import { useUserState } from '../contexts/UserContext';

const ProfileScreen = () => {
  const [user, setUser] = useUserState();
  console.log(user.uid, user.email, user.displayName, user.photoURL);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <Button
        title={'signout'}
        onPress={async () => {
          await signOut();
          setUser({});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default ProfileScreen;
