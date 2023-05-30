import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import styles from '../styles/styles';
import axios from 'axios';

const Home = ({navigation}) => {
    const [res, setRes] = useState('Loading');
    const [hasLoaded, setHasLoaded] = useState(false);
    
    const getToken = async () => {
        try {
          const response = await axios.post('http://192.168.1.11:8000/token');
          const { access_token, payload } = response.data;
          // Use the access_token as needed (e.g., store it in state, local storage, or use it for authenticated requests)
          setRes(access_token);
          console.log(access_token);
          const {sub, exp} = payload;
          console.log(sub);
        } catch (error) {
          // Handle the error
          console.error(error);
        }
    };
    

    useEffect(()=>{
        getToken(); 
        

        
    }, [])
    useEffect(()=>{
    }, [res]);
  return (
    <View style={styles.container}>
        <Text>
            {res}
        </Text>
        <Button title="Scan QR Code" onPress={() => navigation.navigate('Scanner')} />
        
    </View>
  )
}

export default Home