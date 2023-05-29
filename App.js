import { StyleSheet, Text, View, Button } from 'react-native';
import Scanner from './screens/Scanner';
import { useState } from 'react';

export default function App() {
  const [allowScanScreen, setAllowScanScreen] = useState(false);
  const goToScanScreen = () => {
    setAllowScanScreen(true);
  }
  if (allowScanScreen){
    return (
      <Scanner />
    );
  }
  return (
    <View style={styles.container}>
      <Button title="Scan A QR Code" onPress={goToScanScreen}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrDataContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  qrDataText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  qrDataValue: {
    fontSize: 16,
  },
});
