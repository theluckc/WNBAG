import React from "react";
import { Image } from "react-native";
import { Times } from "../../data/teamsList";
import { StyledViews, Titulo, Logo, ContainerLogo } from "./styles";

export function ListaDeTimes({ title, color, image }: Times) {
  return (
    <StyledViews color={color}>
      <ContainerLogo>
        <Logo source={image} resizeMode="contain"/>
      </ContainerLogo>
      <Titulo>{title}</Titulo>
    </StyledViews>
  );
}
