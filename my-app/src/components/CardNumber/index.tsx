import {Container,CardTitle,CardValue} from './styles'
import { View } from 'react-native';
import { Task } from './../task/index';

export function CardNumber(){
    return(        
        <Container>
            <CardTitle>Tarefas:</CardTitle>
            <CardValue>4</CardValue>
        </Container>
    )
}