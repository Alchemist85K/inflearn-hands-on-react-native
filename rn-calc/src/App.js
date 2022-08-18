import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from './components/Button';

export default function App() {
  const [result, setResult] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}></View>
          <View style={styles.bottom}></View>
        </View>

        <View style={styles.operator}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    paddingBottom: 30,
    paddingRight: 30,
  },
  leftPad: {},
  number: {},
  bottom: {
    flexDirection: 'row',
  },
  operator: {},
});
