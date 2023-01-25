import styled from "styled-components/native";

interface corDoTimeProps {
  color: string;
  }

export const StyledViews = styled.View<corDoTimeProps>`
  background-color: ${(props: corDoTimeProps) => props.color};;
  flex-direction: row;
  height: 50px;
  margin: 5px;
`;

export const Titulo = styled.Text`
  font-size: 30px;
  color: white;
`;

export const Logo = styled.Image`
width: 50px;
height: 50px;
`;