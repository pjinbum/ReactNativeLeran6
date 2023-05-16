import React from "react";
import { Text , View , Button } from "react-native";
import CustomButton from "./components/CustomButton";
import PressHit from "./components/PressHit";
import GameButton from "./components/GameButton";
import MoveKey from "./components/MoveKey";
import EventPress from "./components/EventPress";
import ChangeInput from "./components/ChangeInput";

const App = () => {
    return(
     <View style={{flex:1 , justifyContent :'center' , alignItems :'center'}}>
        <Text style={{fontSize : 35 , marginBottom :15 , color :'blue'}}> 버튼테스트</Text>
        {/* <PressHit></PressHit>
             
           

        <CustomButton title='move' />
        <CustomButton title='Action'>second bt</CustomButton>
        <CustomButton></CustomButton> */}
          {/* <Text>

            <GameButton title='move'></GameButton>
            <MoveKey></MoveKey>
            
          </Text> */}
           <EventPress></EventPress>
           <ChangeInput></ChangeInput>

   
     </View>
    );
}

export default App ;