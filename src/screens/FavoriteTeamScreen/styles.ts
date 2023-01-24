import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: flex-start;
`;

export const ButtonEscolhaSeuTime = styled.TouchableOpacity`    
    background-color: #fff;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    background-color: black;
    border-radius: 15px;    
    width: 300px;
    height: 70px;
`;

export const TextEscolhaSeuTime = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
`;

export const TextSemTimeEscolhido = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 16px;
    margin-top: 250px;
`;
