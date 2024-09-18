import{Container, TopContainer, TopButton,TopText,TitleContainer,Title,StatusContainer,TextStatus,StatusCard,StatusTextContainer,StatusIcon,StatusText,StatusButtonDel} from "./styles";
import {Feather} from "@expo/vector-icons"
import { TextInput } from 'react-native';
export default function Details(){
    return(
        <Container>
            <TopContainer>
                <TopButton>
                    <Feather name="chevron-left" size={24} color="white" />
                    <TopText> Voltar </TopText>
                </TopButton>
            </TopContainer>
            <TitleContainer>
                <Title>Tarefa</Title>
            </TitleContainer>
            <TextStatus>Status da tarefa:
            </ TextStatus>
            <StatusContainer>
               <StatusCard>
                <StatusIcon>
                    <Feather name="square" size={24} color="white" />
                </StatusIcon>
                    <StatusTextContainer>
                        <StatusText>Teste</StatusText>
                    </StatusTextContainer>
                </StatusCard> 
                <StatusButtonDel>
                <Feather name="trash-2" size={24} color="white" />
                </StatusButtonDel>
            </StatusContainer>
        </Container>
    )
}