import React , {Component} from "react";
import { TextInput , TouchableHighlight , getString ,
  View , Text , StyleSheet , Clipboard } from "react-native";


  let styles ={}

  export default class ClipBoard extends Component {
    constructor(){
        super()
        this.state = {
            ClipboardData : []
        }
        this.pushClipboardToArray = this.pushClipboardToArray.bind(this)
    }

    componentDidMount(){
        Clipboard.setString('copy text 테스트중') ;
    }
    
    updateClipboard (string){
        Clipboard.setString(string) ;
    }

    async pushClipboardToArray(){
      const { ClipboardData } = this.state
      var content = await Clipboard.getString();
      ClipboardData.push(content)
      this.setState({ClipboardData})
    }

      render ( ){
        const { ClipboardData} = this.state
        return(
             <View style={styles.container}>
                <TextInput style={styles.input} onChangeText={ (text) => this.updateClipboard(text)}></TextInput>
                <TouchableHighlight style={styles.button} onPress={this.pushClipboardToArray}>
                    <Text> 추가하기 </Text>
                </TouchableHighlight>


               {
                ClipboardData.map((d,i) => {
                    return <Text key={i}> {d} </Text>
                })
               }

             </View>
        );
    }
  }

  styles = StyleSheet.create({
    container : {
      justifyContent :'center',
      flex : 1 ,
      margin : 20
    },
    input : {
      padding : 10,
      marginTop : 15,
      height : 50,
      backgroundColor:'#ddd'
    },
    button :{
        backgroundColor:'#ddd',
        justifyContent :'center',
        alignItems:'center',
        height : 50,
        marginTop : 15
    }
  })
