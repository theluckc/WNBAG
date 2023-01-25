import styled from "styled-components/native";

interface corDoTimeProps {
  color: string;
  }

export const StyledViews = styled.View<corDoTimeProps>`
  background-color: ${(props: corDoTimeProps) => props.color};;
  flex-direction: row;
  height: 100px;
  margin: 5px;
  margin-left: 0px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const Titulo = styled.Text`
  font-size: 24px;
  color: white;
  margin-top: 30px;
  margin-left: 10px;
`;

export const ContainerLogo = styled.View`
  width: 70px;
  height: 90px;
  align-self: center;
`;

export const Logo = styled.Image`
background-color: transparent;
width: 100%;
height: 100%;
margin-left: 5px;;
`;