import React from 'react'

const Dup = () => {
  return (
        <View style={styles.qrDataContainer}>
            <Text style={styles.qrDataText}>Scanned QR code:</Text>
            <Text style={styles.qrDataValue}>{qrData}</Text>
            <Button title="Re Scan" onPress={startScan} />
            <Button title="Go Back" onPress={goBack} />
        </View>
    )
}

export default Dup