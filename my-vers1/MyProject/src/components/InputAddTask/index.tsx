import {Feather} from '@expo/vector-icons';
import {InputContainer,Input,InputButton} from './styles';
import { TextInput } from 'react-native';

export function InputAddTask(){
    return(
        <InputContainer>
            <Input 
                placeholder='Digite a tarefa' 
                placeholderTextColor={"white"}
                keyboardType='default'
            ></Input>
            <InputButton >
                <Feather name="plus-square" size={24} color="white" />
            </InputButton>        
        </InputContainer>
    );
}