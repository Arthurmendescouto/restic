import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #000;
`;

export const TopContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between; /* Para espaço entre o botão e o título */
    background-color: #714dd9;
    padding: 55px; /* Ajuste o padding se necessário */
    border-radius: 66px;
    width: 100%;
`;

export const TopButton = styled.TouchableOpacity`
    padding: 10px; /* Aumente o padding para garantir que o toque funcione */
`;

export const TitleContainer = styled.View`
    flex: 1; /* Mantido para ocupar o espaço restante */
    align-items: center; /* Centraliza horizontalmente */
    justify-content: center; /* Centraliza verticalmente */
`;

export const Title = styled.Text`
    color: white;
    font-size: 24px;
    text-align: center; /* Centraliza o texto dentro do Title */
`;

export const StatusContainer = styled.View`
    flex: 1;
    margin-top: 16px;
`;

export const TextStatus = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-top: 16px;
`;