import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="1"
        onPress={() => {}}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.NUMBER}
      />
      <Button
        title="0"
        onPress={() => {}}
        buttonStyle={{ width: 200, height: 100 }}
      />
      <Button
        title="="
        onPress={() => {}}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
