import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import FastImage from '../components/FastImage';
import { useUserState } from '../contexts/UserContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GRAY, WHITE } from '../colors';

const UpdateProfileScreen = () => {
  const navigation = useNavigation();

  const [user] = useUserState();

  return (
    <View style={styles.container}>
      <Button title="back" onPress={() => navigation.goBack()} />
      <View>
        <FastImage source={{ uri: user.photoURL }} style={styles.photo} />
        <Pressable onPress={() => {}} style={styles.imageButton}>
          <MaterialCommunityIcons name="image" size={20} color={WHITE} />
        </Pressable>
      </View>

      <View>
        <TextInput
          value={user.displayName}
          style={styles.input}
          placeholder={'Nickname'}
          textAlign={'center'}
          maxLength={10}
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
          textContentType={'none'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: GRAY.LIGHT,
  },
  imageButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY.DARK,
  },
  input: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 200,
    fontSize: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.DEFAULT,
  },
});

export default UpdateProfileScreen;
