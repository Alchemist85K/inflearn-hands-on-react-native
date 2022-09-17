import { memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListItem = memo(({ item }) => {
  console.log(item.id);
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <Text style={{ fontSize: 20 }}>{item.task}</Text>
    </View>
  );
});

const ListScreen = () => {
  const todos = [];
  for (let i = 1; i < 501; i++) {
    todos.push({ id: i, task: `task ${i}`, number: i });
  }

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <ListItem item={item} />}
      keyExtractor={(item) => item.number.toString()}
      windowSize={5} // prev : 2 , curr : 1, next: 2
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ListScreen;
