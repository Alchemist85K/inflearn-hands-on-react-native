import { FlatList, StyleSheet, View } from 'react-native';
import { GRAY } from '../colors';
import ListItem from '../components/ListItem';

const Separator = () => {
  return <View style={styles.separator}></View>;
};
const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: GRAY.LIGHT,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

const ListScreen = () => {
  const todos = [
    { id: 1, task: 'React Native 1', isDone: false },
    { id: 2, task: 'React Native 2', isDone: true },
    { id: 3, task: 'React Native 3', isDone: false },
    { id: 4, task: 'React Native 4', isDone: true },
    { id: 5, task: 'React Native 5', isDone: false },
  ];

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <ListItem item={item} />}
      windowSize={5} // prev : 2 , curr : 1, next: 2
      ItemSeparatorComponent={Separator}
      // ListHeaderComponent={() => <View style={{ height: 10 }}></View>}
      ListHeaderComponent={View}
      ListHeaderComponentStyle={{ height: 10 }}
    />
  );
};

export default ListScreen;
