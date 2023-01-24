import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Container, ButtonEscolhaSeuTime, TextEscolhaSeuTime, TextSemTimeEscolhido } from './styles';

const FavoriteTeamScreen: React.FC = () => {

    const navigation = useNavigation();
    const escolheuTime = false;


    return (
      <Container>
        <ButtonEscolhaSeuTime onPress={() => navigation.navigate('TeamScreen' as never)}>
            <TextEscolhaSeuTime>Escolha um time</TextEscolhaSeuTime>
        </ButtonEscolhaSeuTime>
        {escolheuTime ? <TextSemTimeEscolhido>
             Time escolhidos
        </TextSemTimeEscolhido> : <TextSemTimeEscolhido> Nenhum times escolhidos</TextSemTimeEscolhido>}        
      </Container>
    );
  }

export default FavoriteTeamScreen;
