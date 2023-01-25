import React, {useState} from "react";
import { Times } from "../../data/teamsList";
import { StyledViews, Titulo, Logo, ContainerLogo } from "./styles";

interface ListaDeTimesProps {
  onPress: (id: string) => void;
  time: Times;
}

export function ListaDeTimes({
  onPress,
  time: { color, id, image, title, selected },
}: ListaDeTimesProps) {
  return (
    <StyledViews
      color={color}
      onPress={() => onPress(id)}
      style={
        selected == true
          ? {
              backgroundColor: "gray",
            }
          : {
              backgroundColor: color,
            }
      }
    >
      <ContainerLogo>
        <Logo source={image} resizeMode="contain" />
      </ContainerLogo>
      <Titulo>{title}</Titulo>
    </StyledViews>
  );
}
