import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import App from '../App';
import styles from '../styles/styles';

const Scanner = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [allowGoingBack, setAllowGoingBack] = useState(false);
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
    if (allowGoingBack){
        return <App />
    }
    const goBack = () =>{
      setAllowGoingBack(true);
    }
    return (
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
  
        {scanned && (
          <View style={styles.qrDataContainer}>
            <Text style={styles.qrDataText}>Scanned QR code:</Text>
            <Text style={styles.qrDataValue}>{qrData}</Text>
            <Button title="Re Scan" onPress={startScan} />
            <Button title="Go Back" onPress={goBack} />
          </View>
        )}
  
        {!scanned && (
          <>
            <Button title="Start Scan" onPress={startScan} />
            
          </>
        )}
      </View>
    );
}

export default Scanner