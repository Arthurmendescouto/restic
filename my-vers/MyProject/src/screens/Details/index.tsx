import { 
    Container, 
    TopContainer, 
    TopButton, 
    TopText, 
    TitleContainer, 
    Title, 
    StatusContainer, 
    TextStatus 
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { View, Text } from 'react-native';

export default function Details() {
    return (
        <Container>
            <TopContainer>
                <TopButton>
                    <Feather name="chevron-left" size={24} color="white" />
                    
                </TopButton>
            </TopContainer>
            <TitleContainer>
                <Title style={{ textAlign: 'center', color: 'white' }}>Casa</Title>
            </TitleContainer>
            <TextStatus>Status das tarefas:</TextStatus>
            <StatusContainer>
                {/* Aqui você pode adicionar qualquer conteúdo adicional, se necessário */}
            </StatusContainer>
        </Container>
    );
}