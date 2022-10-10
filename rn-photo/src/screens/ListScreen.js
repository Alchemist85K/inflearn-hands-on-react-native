import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPosts } from '../api/post';

const ListScreen = () => {
  useEffect(() => {
    (async () => {
      const list = await getPosts();
      console.log(list, list.length);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ListScreen</Text>
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

export default ListScreen;
