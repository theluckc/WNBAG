import React, { useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Container, BotaoSalvar, TextoBotao } from "./styles";
import { Times, listaTimes } from "../../data/teamsList";
import { ListaDeTimes } from "../../components/listaTimes/ListaTimes";

const TeamScreen: React.FC = () => {
  const [att, setAtt] = useState<Times[]>(listaTimes);

  function onPressHandler(id: string) {
    const newObj = [...att];

    newObj.forEach((element) => {
      if (element.id === id) {
        element.selected = !element.selected;        
      }
    });

    setAtt(newObj);
  }

  function renderItem({ item }: ListRenderItemInfo<Times>) {
    return <ListaDeTimes onPress={onPressHandler} time={item} />;
  }
  return (
    <Container>
      <FlatList
        data={att}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <BotaoSalvar>
        <TextoBotao>Salvar</TextoBotao>
      </BotaoSalvar>
    </Container>
  );
};

export default TeamScreen;
