import { StyleSheet, Text, ScrollView, View, Button } from 'react-native';
import {React, useState, useEffect} from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Home = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not yet scannedd');
    const askForCameraPermission = () => {
        (async () => {
            const status = await BarCodeScanner.askForCameraPermission();
            setHasPermission(status == 'granted');
        })()
    }
    
    useEffect(()=>{
        
        askForCameraPermission();
    }, []);

 

    if (hasPermission === null){
        return (
            <View>
                <Text>
                    Requesting for Camera Permission
                </Text>
            </View>
        );
    }


  return (
    <View>
        <Text>
            {text}
        </Text>
        
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFD95A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 700,
        fontSize: 24,
        padding: 40,
        backgroundColor: "black",
        color: "white",
        margin: 0

    }
});
export default Home