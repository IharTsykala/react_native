import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [state, setState] = useState('12')
    
    const currentPosition = async () => {
        try {
            const response = await fetch('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDDuAn5EN9v9O3dVjMPXP-vnV4MyowsY4w')
            console.log(response)
            setState(response)
        } catch (e) {
            console.log(e)
        }
    }
    
  return (
    <View style={styles.container}>
      <Text onPress ={()=>currentPosition()}>{`Hello31273: `}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// ${state.toString()}
