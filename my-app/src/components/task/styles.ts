import styled from 'styled-components/native'

export const Container =styled.TouchableOpacity`
    width: 100%;
    height: 66px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: saddlebrown;
    overflow: hidden;
`;

export const TaskText=styled.Text`
color: #fff;
font-size: 16px;
font-weight: 500;
`;

export const TaskDone=styled.TouchableOpacity`
width: 56px;
height: 56px;
background-color: green;
justify-content: center;
align-items: center;
`
export const TaskDelete=styled.TouchableOpacity`
width: 56px;
height: 56px;
background-color: black;
justify-content: center;
align-items: center;
`