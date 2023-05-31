import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import styles from '../styles/styles'
const Result = ({navigation, route}) => {
    const {result} = route.params;
    console.log(result)
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
            {result}
        </Text>
        <Button title="Go To Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  )
}

export default Result