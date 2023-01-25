import React from "react";
import { Image } from "react-native";
import { Times } from "../../data/teamsList";
import { StyledViews, Titulo, Logo } from "./styles";

export function ListaDeTimes({ title, color, image }: Times) {
  return (
    <StyledViews color={color}>
      <Logo source={image} />
        <Titulo>{title}</Titulo>
    </StyledViews>
  );
}