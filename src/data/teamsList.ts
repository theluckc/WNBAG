import { ImageProps } from "react-native";

export interface Times {
  id: string;
  title: string;
  color: string;
  image: ImageProps["source"];
}

const lakersLogo = require("../../assets/LogoTimes/lakers.png");
const clippersLogo = require("../../assets/LogoTimes/clippers.png");
const warriorsLogo = require("../../assets/LogoTimes/warriors.png");

export const listaTimes: Times[] = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Lakers",
    color: "#552583",
    image: lakersLogo,
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Clippers",
    color: "#C8102E",
    image: clippersLogo,
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Warriors",
    color: "#1D428A",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Cavaliers",
    color: "#860038",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hawks",
    color: "#C8102E",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Celtics",
    color: "#007A33",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Nets",
    color: "#000000",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hornets",
    color: "#1D1160",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bulls",
    color: "#CE1141",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Mavericks",
    color: "#00538C",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Nuggets",
    color: "#0E2240",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pistons",
    color: "#C8102E",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Rockets",
    color: "#CE1141",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pacers",
    color: "#002D62",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Grizzlies",
    color: "#5D76A9",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Heat",
    color: "#98002E",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bucks",
    color: "#00471B",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Timberwolves",
    color: "#0C2340",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pelicans",
    color: "#0C2340",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Thunder",
    color: "#007AC1",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Knicks",
    color: "#006BB6",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Magic",
    color: "#0077C0",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "76ers",
    color: "#006BB6",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Suns",
    color: "#1D1160",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Trail Blazers",
    color: "#E03A3E",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Kings",
    color: "#5A2D81",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Spurs",
    color: "#C4CED4",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Raptors",
    color: "#CE1141",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Jazz",
    color: "#002B5C",
    image: warriorsLogo,
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    title: "Wizards",
    color: "#E31837",
    image: warriorsLogo,
  },
];
