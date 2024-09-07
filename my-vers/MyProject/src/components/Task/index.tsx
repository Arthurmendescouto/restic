
import { Feather } from '@expo/vector-icons';
import {Container,TaskText, TaskDone, TaskDelete} from './styles'


export function Task(){
    return(
        <Container>
            <TaskDone>
                <Feather name='circle' size={24} color='white' />
            </TaskDone>
            <TaskText>tarefa
            </TaskText>
            <TaskDelete>
            <Feather name='trash-2' size={24} color='white' />
            </TaskDelete>
        </Container>
    );
}

