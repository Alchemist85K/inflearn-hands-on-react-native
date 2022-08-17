import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';

export default function App() {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Text>button</Text>
      </View>

      <View style={{ flex: 2, backgroundColor: 'gray' }}>
        <Text>view</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultContainer: {
    flex: 1,
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flex: 2,
    backgroundColor: 'skyblue',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
  },
});
