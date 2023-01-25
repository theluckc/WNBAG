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
const cavaliersLogo = require("../../assets/LogoTimes/cavaliers.png");
const hawksLogo = require("../../assets/LogoTimes/hawks.png");
const celticsLogo = require("../../assets/LogoTimes/celtics.png");
const netsLogo = require("../../assets/LogoTimes/nets.png");
const hornetsLogo = require("../../assets/LogoTimes/hornets.png");
const bullsLogo = require("../../assets/LogoTimes/bulls.png");
const mavericksLogo = require("../../assets/LogoTimes/mavericks.png");
const nuggetsLogo = require("../../assets/LogoTimes/nuggets.png");
const pistonsLogo = require("../../assets/LogoTimes/pistons.png");
const rocketsLogo = require("../../assets/LogoTimes/rockets.png");
const pacersLogo = require("../../assets/LogoTimes/pacers.png");
const grizzliesLogo = require("../../assets/LogoTimes/grizzlies.png");
const heatLogo = require("../../assets/LogoTimes/heat.png");
const bucksLogo = require("../../assets/LogoTimes/bucks.png");
const timberwolvesLogo = require("../../assets/LogoTimes/timberwolves.png");
const pelicansLogo = require("../../assets/LogoTimes/pelicans.png");
const thunderLogo = require("../../assets/LogoTimes/thunder.png");
const knicksLogo = require("../../assets/LogoTimes/knicks.png");
const magicLogo = require("../../assets/LogoTimes/magic.png");
const philliLogo = require("../../assets/LogoTimes/philli.png");
const sunsLogo = require("../../assets/LogoTimes/suns.png");
const blazersLogo = require("../../assets/LogoTimes/blazers.png");
const kingsLogo = require("../../assets/LogoTimes/kings.png");
const spursLogo = require("../../assets/LogoTimes/spurs.png");
const raptorsLogo = require("../../assets/LogoTimes/raptors.png");
const jazzLogo = require("../../assets/LogoTimes/jazz.png");
const wizardsLogo = require("../../assets/LogoTimes/wizards.png");




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
    image: cavaliersLogo,
  },
  {
    id: "78694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hawks",
    color: "#C8102E",
    image: hawksLogo,
  },
  {
    id: "88694a0f-3da1-471f-bd96-145571e29d72",
    title: "Celtics",
    color: "#007A33",
    image: celticsLogo,
  },
  {
    id: "98694a0f-3da1-471f-bd96-145571e29d72",
    title: "Nets",
    color: "#000000",
    image: netsLogo,
  },
  {
    id: "61694a0f-3da1-471f-bd96-145571e29d72",
    title: "Hornets",
    color: "#1D1160",
    image: hornetsLogo,
  },
  {
    id: "62694a0f-3da1-471f-bd96-145571e29d72",
    title: "Bulls",
    color: "#CE1141",
    image: bullsLogo,
  },
  {
    id: "63694a0f-3da1-471f-bd96-145571e29d72",
    title: "Mavericks",
    color: "#00538C",
    image: mavericksLogo,
  },
  {
    id: "64694a0f-3da1-471f-bd96-145571e29d72",
    title: "Nuggets",
    color: "#0E2240",
    image: nuggetsLogo,
  },
  {
    id: "65694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pistons",
    color: "#C8102E",
    image: pistonsLogo,
  },
  {
    id: "66694a0f-3da1-471f-bd96-145571e29d72",
    title: "Rockets",
    color: "#CE1141",
    image: rocketsLogo,
  },
  {
    id: "67694a0f-3da1-471f-bd96-145571e29d72",
    title: "Pacers",
    color: "#002D62",
    image: pacersLogo,
  },
  {
    id: "69694a0f-3da1-471f-bd96-145571e29d72",
    title: "Grizzlies",
    color: "#5D76A9",
    image: grizzliesLogo,
  },
  {
    id: "68194a0f-3da1-471f-bd96-145571e29d72",
    title: "Heat",
    color: "#98002E",
    image: heatLogo,
  },
  {
    id: "68294a0f-3da1-471f-bd96-145571e29d72",
    title: "Bucks",
    color: "#00471B",
    image: bucksLogo,
  },
  {
    id: "68634a0f-3da1-471f-bd96-145571e29d72",
    title: "Timberwolves",
    color: "#0C2340",
    image: timberwolvesLogo,
  },
  {
    id: "68494a0f-3da1-471f-bd96-145571e29d72",
    title: "Pelicans",
    color: "#0C2340",
    image: pelicansLogo,
  },
  {
    id: "68594a0f-3da1-471f-bd96-145571e29d72",
    title: "Thunder",
    color: "#007AC1",
    image: thunderLogo,
  },
  {
    id: "68794a0f-3da1-471f-bd96-145571e29d72",
    title: "Knicks",
    color: "#006BB6",
    image: knicksLogo,
  },
  {
    id: "68894a0f-3da1-471f-bd96-145571e29d72",
    title: "Magic",
    color: "#0077C0",
    image: magicLogo,
  },
  {
    id: "68994a0f-3da1-471f-bd96-145571e29d72",
    title: "76ers",
    color: "#006BB6",
    image: philliLogo,
  },
  {
    id: "68614a0f-3da1-471f-bd96-145571e29d72",
    title: "Suns",
    color: "#1D1160",
    image: sunsLogo,
  },
  {
    id: "68694a0f-4da1-471f-bd96-145571e29d72",
    title: "Trail Blazers",
    color: "#E03A3E",
    image: blazersLogo,
  },
  {
    id: "68694a0f-5da1-471f-bd96-145571e29d72",
    title: "Kings",
    color: "#5A2D81",
    image: kingsLogo,
  },
  {
    id: "68694a0f-6da1-471f-bd96-145571e29d72",
    title: "Spurs",
    color: "#C4CED4",
    image: spursLogo,
  },
  {
    id: "68694a0f-7da1-471f-bd96-145571e29d72",
    title: "Raptors",
    color: "#CE1141",
    image: raptorsLogo,
  },
  {
    id: "68694a0f-8da1-471f-bd96-145571e29d72",
    title: "Jazz",
    color: "#002B5C",
    image: jazzLogo,
  },
  {
    id: "68694a0f-9da1-471f-bd96-145571e29d72",
    title: "Wizards",
    color: "#E31837",
    image: wizardsLogo,
  },
];
