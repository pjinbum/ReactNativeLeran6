import React , {useState} from "react";
import {Pressable, StyleSheet ,Text , View } from "react-native";
import  DateTimePickerModal  from "react-native-modal-datetime-picker";
import { format } from 'date-fns'; //날짜 형식바꾸는거임
import ko from 'date-fns/esm/locale/ko/index.js' ;

function DatePicker () {
    const [date , onChangeDate] = useState(new Date());
    const [mode , setMode] = useState('date');
    const [visible, setVisible] = useState(false);

    const onPressDate=()=>{
        setMode('date'); //날짜 모달
        setVisible(true); //보이기

    }

    const onPressTime=()=>{ //시간 선택한 경우
        setMode('time'); //시간 모달
        setVisible(true); //보이기

    }

    const onConfirm = (selected) => { //모달에서 날짜나 시간 선택한 경우
        setVisible(false);  //감추기
        onChangeDate(selected); //선택한값 저장
    } 

    const onCancel = ()=>{ //모달에서 취소 한경우
        setVisible(false) //감추기
    }
    return(
        <View>
            <Pressable onPress={onPressDate}>
                <Text>{format(new Date(date),'ppp' , {locale:ko})}</Text>
            </Pressable>
            <Pressable onPress={onPressTime}>
                <Text>{format(new Date(date), 'p' ,{locale:ko})}</Text>
            </Pressable>
           
            <DateTimePickerModal
             isVisible={visible}
             mode={mode}
             onConfirm={onConfirm}
             onCancel={oncancel}
             date={date}
            ></DateTimePickerModal>
        </View>
        
    )
}

export default DatePicker ;


