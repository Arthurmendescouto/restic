import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #000000;
    padding: 0; /* Removido o padding para ocupar todo o espaço */
`;

export const TopContainer = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #714dd9;
    padding: 60px; /* Ajuste conforme necessário */
    border-radius: 40px; /* Bordas arredondadas */
    width: 100%; /* Faz com que o container ocupe toda a largura */
    position: absolute; /* Mudei para absolute para ocupar todo o topo */
    top: 0; /* Para garantir que fique no topo */
`;

export const TopButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    position: absolute; /* Para manter na esquerda */
    left: 20px; /* Ajuste conforme necessário */
    padding-top:20px ;
    
`;

export const TopText = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-top: 3;
`;

export const TitleContainer = styled.View`
    flex: 1; /* Para garantir que ocupe o espaço disponível */
    align-items: center; /* Centraliza o conteúdo */
    justify-content: center;
    margin-top: -210px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 24px; /* Aumenta o tamanho da fonte */
    text-align: center; /* Centraliza o texto */
`;

export const StatusContainer = styled.View`
    flex: 1;
    margin-top: 16px; /* Manter o espaço abaixo do TopContainer */
`;

export const TextStatus = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-top: -180px;
`;