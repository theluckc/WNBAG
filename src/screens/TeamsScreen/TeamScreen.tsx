import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { Container} from "./styles";
import { Times, listaTimes} from "../../data/teamsList"
import { ListaDeTimes } from "../../components/listaTimes/ListaTimes";

const TeamScreen: React.FC = () => {
  function renderItem({ item }: ListRenderItemInfo<Times>) {
    return <ListaDeTimes {...item} />;
  }
  return (
    <Container>
      <FlatList
        data={listaTimes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};

export default TeamScreen;
