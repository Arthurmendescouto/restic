import styled from 'styled-components/native';

export const Container =styled.TouchableOpacity`
    width: 100%;
    height: 66px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #161616;
    overflow: hidden;
    border-radius: 4px;
    margin-top: 20px;
`;

export const TaskText=styled.Text`
color: white;
font-size: 16px;
font-weight: 500;
`;

export const TaskDone=styled.TouchableOpacity`
width: 51px;
height: 31px;
background-color: #343333;
justify-content: center;
align-items: start;
border-radius: 100px;
`

export const TaskDelete=styled.TouchableOpacity`
width: 56px;
height: 62px;
background-color: #c91025;
justify-content: center;
align-items: center;
border-radius: 4px;
`

