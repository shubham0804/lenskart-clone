import React from "react";
import { Image } from "react-native";
import Ripple from "react-native-material-ripple";

const RippleImage = ({
    imageSource,
    imageStyle,
    rippleColor,
    rippleStyle,
    rippleCentered = false,
    rippleSize,
}) => {
    return (
        <Ripple
            rippleDuration={300}
            rippleOpacity={0.5}
            rippleFades={false}
            rippleColor={rippleColor}
            style={rippleStyle}
            rippleCentered={rippleCentered}
            rippleSize={rippleSize}
        >
            <Image source={imageSource} style={imageStyle} resizeMode="contain" />
        </Ripple>
    );
};

export default RippleImage;
