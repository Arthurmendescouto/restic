import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Container, TopContainer, TopButton, TitleContainer, CardTitle, StatusContainer, TextStatus } from "./styles";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import { useNavigation } from '@react-navigation/native'; // Importação adicionada

type DetailsParams = {
    id: string;
    title: string;
    status: boolean;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({ route }: Props) {
    const navigation = useNavigation();
    const { title, status } = route.params as DetailsParams;

    const handleBackPress = () => {
        console.log("Voltando para a tela anterior");
        navigation.goBack();
    };

    return (
        <Container>
            <TopContainer>
                <TopButton onPress={handleBackPress} activeOpacity={0.7}>
                    <Feather name="chevron-left" size={24} color="white" />
                </TopButton>
                <TitleContainer>
                    <CardTitle>{title}</CardTitle>
                </TitleContainer>
            </TopContainer>
            <TextStatus>Status da tarefa:</TextStatus>
            <StatusContainer>
                <TextStatus style={{ color: status ? '#0E9577' : 'red' }}>
                    {status ? 'Concluída' : 'Pendente'}
                </TextStatus>
            </StatusContainer>
        </Container>
    );
}