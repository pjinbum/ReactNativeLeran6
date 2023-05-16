import React from 'react';
import {View,StyleSheet} from 'react-native';
import MyAnimation from './components/MyAnimation';
import InputAni from './components/InputAni';
import Loadding from './components/Loadding';
import ParallelAni from './components/ParallelAni';
import SequenceAni from './components/SequenceAni';
import Training1 from './components/training1';
import Training2 from './components/Training2';
import Training3 from './components/Training3';
const App =() => {
  return (
 <View style={styles.contaniner}>
    <Training3/>
 </View>
  );
}

const styles=StyleSheet.create({
  contaniner:{
    flex:1,
    justifyContent:'center'  ,
    alignItems:'center' 
  }
});
export default App;
