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
    keyId,
}) => {
    let uniqueKey;
    if (keyId) {
        uniqueKey = keyId.toString();
    }
    return (
        // <React.Fragment key={uniqueKey}>
        <Ripple
            // key={uniqueKey}
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
        // </React.Fragment>
    );
};

export default RippleImage;
