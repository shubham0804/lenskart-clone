import React from "react";
import { Image } from "react-native";
import Ripple from "react-native-material-ripple";
import * as Linking from "expo-linking";

const RippleImage = ({
    imageSource,
    imageStyle,
    rippleColor,
    rippleStyle,
    rippleCentered = false,
    rippleSize,
    onPress,
}) => {
    // console.log(rippleColor);
    return (
        <Ripple
            rippleDuration={250}
            rippleOpacity={0.5}
            rippleFades={false}
            rippleColor={rippleColor}
            style={rippleStyle}
            rippleCentered={rippleCentered}
            rippleSize={rippleSize}
            onPress={() =>
                onPress &&
                setTimeout(() => {
                    onPress();
                }, 250)
            }
        >
            <Image source={imageSource} style={imageStyle} resizeMode="contain" />
        </Ripple>
    );
};

export default RippleImage;
