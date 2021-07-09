import { Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export const screen = {
    height,
    width,
};

export const COLORS = {
    primary: "#203341", // Dark blue header colour
    secondary: "#13C7BE", // Turqoise
    white: "#FFFFFF",
    darkGrey: "#838383",
    darkerGrey: "#5c5b5b",
    lightGrey: "#d3d3d3",
    lighterGrey: "#f9f9f9",
    vermilion: "#DC4B38",
    brightVermilion: "#ea4a35",
};

export const aspectRatio = {
    EXTRA_WIDE: 4 / 1,
};
