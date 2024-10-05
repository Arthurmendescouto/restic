import {Feather} from '@expo/vector-icons';
import {InputContainer,Input,InputButton} from './styles';
import { TextInput } from 'react-native';

type Props= {
    onPress:()=> void;
    OnchangeText:(text: string)=> void;
    onBlur: (e: any)=> void;
    value:string;
}

export function InputAddTask({onPress, OnchangeText,onBlur ,value}:Props){
    return(
        <InputContainer>
            <Input 
                placeholder='Digite a tarefa' 
                placeholderTextColor={"white"}
                keyboardType='default'
                value={value}
                onChangeText={OnchangeText}
                onSubmitEditing={onPress}
                onBlur={onBlur}
            ></Input>
            <InputButton onPress={onPress}>
                <Feather name="plus-square" size={24} color="white" />
            </InputButton>        
        </InputContainer>
    );
}