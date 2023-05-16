//DatePicker.js

import React ,{Component, useState}from 'react';
import {Pressable, StyleSheet ,Text,View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import ko from 'date-fns/esm/locale/ko/index.js';
class DatePicker extends Component {
  constructor(){
    super();
    this.state={
      date : new Date(),
      mode : 'date',
      visible:false
    }
    this.onPressDate= this.onPressDate.bind(this)
    this.onPressTime= this.onPressTime.bind(this)
    this.onConfirm= this.onConfirm.bind(this)
    this.onCancel= this.onCancel.bind(this)
  }

  onPressDate=()=>{  //날짜 선택 한경우
    this.setState({mode:'date'});  //날짜 모달 
    this.setState({visible:true}); //보이기
  }
  onPressTime=()=>{  //시간 선택한경우
    this.setState({mode:'time'}); // 시간 모달
    this.setState({visible:true}); // 보이기
  }
   onConfirm = (selected) => { // 모달에서 날짜나 시간 선택한경우
    this.setState({visible:false}); // 감추기
    this.setState({date:seleted}); // 선택한값 저장
  }
  onCancel=()=>{  //모달에서 취소 한경우
    this.setState({visible:false}); //감추기
  }
  render(){
  return (
    <View>
        <Pressable onPress={this.onPressDate}>
              <Text>{format(new Date(this.state.date),'PPP', {locale:ko} ) } </Text>
        </Pressable>
        <Pressable onPress={this.onPressTime}>
              <Text>{ format(new Date(this.state.date), 'p', {locale:ko}) }</Text>
        </Pressable>

      <DateTimePickerModal
        isVisible={this.state.visible}
        mode={this.state.mode}
        onConfirm={this.onConfirm}
        onCancel={this.onCancel}
        date={this.state.date}
      />
    </View>
  );
  }
}

export default DatePicker;