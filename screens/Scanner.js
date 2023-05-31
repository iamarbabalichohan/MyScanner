import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import App from '../App';
import styles from '../styles/styles';

const Scanner = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [qrData, setQrData] = useState('');
  
    useEffect(() => {
      (async () => {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      
      setQrData(data);
      // Handle the scanned QR code data here
      alert(`Scanned QR code: ${data}`);
    };
  
    const startScan = () => {
      setScanned(false);
      setQrData('');
    };
  
    if (hasPermission === null) {
      
      return <Text>Requesting camera permission...</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera.</Text>;
    }

    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
  
        {scanned && navigation.navigate('Result', {
          result: qrData
        })}
  
        {!scanned && (
          <>
            <Button title="Start Scan" onPress={startScan} />
            
          </>
        )}
      </View>
    );
}

export default Scanner