import { Button, StyleSheet, Text, View } from 'react-native';

const ListScreen = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>ListScreen</Text>

      <Button
        title="push"
        onPress={() => navigation.push('List', { ts: Date.now() })}
      />
      <Button
        title="navigate"
        onPress={() => navigation.navigate('List', { ts: Date.now() })}
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
});

export default ListScreen;
