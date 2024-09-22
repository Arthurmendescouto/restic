import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #000;
`;

export const TopContainer = styled.View`
    width: 100%; /* Preenche toda a largura */
    height: 135px;
    background-color: #714dd9;
    overflow: hidden;
    display: flex;
    flex-direction: row; /* Alinha a seta e o título em linha */
    align-items: center; /* Alinha verticalmente no centro */
    padding: 10px; /* Ajuste o padding se necessário */
    border-bottom-left-radius: 50px; /* Raiz arredondada apenas na parte inferior esquerda */
    border-bottom-right-radius: 50px; /* Raiz arredondada apenas na parte inferior direita */
`;

export const TopButton = styled.TouchableOpacity`
    padding: 10px; /* Aumente o padding para garantir que o toque funcione */
    margin-top: 6px;
`;

export const TitleContainer = styled.View`
    flex: 1; /* Ocupa o espaço restante */
    align-items: center; /* Centraliza horizontalmente */
    margin-right :45px;
`;

export const CardTitle = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: 700;
    text-align: center; /* Centraliza o texto */
    margin-top: 0; /* Removido para evitar distorção */
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