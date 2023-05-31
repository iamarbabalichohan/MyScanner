import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Button, Text, SafeAreaView } from 'react-native'
import styles from '../styles/styles';
import axios from 'axios';

const Home = ({navigation}) => {
    const [res, setRes] = useState('Loading');
    const [hasLoaded, setHasLoaded] = useState(false);
    
    const getToken = async () => {
        try {
          const response = await axios.post('http://192.168.124.7:8000/token');
          const { access_token, payload } = response.data;
          setRes(access_token);
        } catch (error) {
          console.error(error);
        }
    };
    

    useEffect(()=>{
        getToken(); 
        

        
    }, [])
    useEffect(()=>{
    }, [res]);
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            {res}
        </Text>
        <Button title="Scan QR Code" onPress={() => navigation.navigate('Scanner')} />
        
    </SafeAreaView>
  )
}

export default Home