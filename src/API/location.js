//location.js
// APi 몇개만 하고 가계부 할게요.....

import React, { Component,useState, useEffect} from 'react';
import { TouchableHighlight,View, Text, StyleSheet } from 'react-native';
import * as Location from 'expo-location';



let styles={}

export default function LocationApp() {
  const [city, setCity] = useState("Loading...");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted) {
      setOk(false);
    }
    const { coords:{latitude, longitude} } = await Location.getCurrentPositionAsync({accuracy: 5});
    const location = await Location.reverseGeocodeAsync(
      {latitude, longitude}, 
      {useGoogleMaps: false}
    );
    setCity(location[0].city);
  };

  useEffect(() => {
    ask();
  }, []);

    return (
      <View style={styles.container}>
        <Text style={styles.name}>도시</Text>
        <Text style={styles.name}> {city}</Text>
      </View>
    );
  
}
styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    padding:20,
  },
  name:{
    color:'red',
    fontSize:30
  },
  button:{
    height:50,
    marginTop:15,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#eee'
  }
})


