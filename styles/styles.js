import { StyleSheet } from "react-native";
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
export default styles;