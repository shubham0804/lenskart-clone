import React, { useState, useRef } from "react";
import { StyleSheet, Pressable, useWindowDimensions } from "react-native";
import { Video } from "expo-av";

import { FontAwesome } from "@expo/vector-icons";

export default VideoScreen = ({ route, navigation }) => {
    const video = useRef(null);
    const [status, setStatus] = useState({ lastPaused: 0, isPlaying: true });
    const [checkPlayTime, setCheckPlayTime] = useState(true);
    const [playPauseButtonVisiblity, setPlayPauseButtonVisibility] = useState(true);

    const toggleButtonVisiblity = () => {
        setPlayPauseButtonVisibility(!playPauseButtonVisiblity);
        // If button is not visible, set checkPlayTime to false
        playPauseButtonVisiblity && setCheckPlayTime(false);
    };

    const handlePlayBackUpdate = (liveStatus) => {
        // Video has been paused
        const currentPosition = liveStatus.positionMillis;
        if (!liveStatus.isPlaying) {
            setStatus({
                ...status,
                isPlaying: false,
                lastPaused: currentPosition,
            });
        } else {
            // Video is being played
            setStatus({
                ...status,
                isPlaying: true,
            });
            // Check current playtime if req.
            if (playPauseButtonVisiblity) {
                if (checkPlayTime) {
                    const currentPlayTime = currentPosition - status.lastPaused;
                    // console.log(`Current PlayTime: ${currentPlayTime}`);
                    if (currentPlayTime >= 3000) {
                        toggleButtonVisiblity();
                        setCheckPlayTime(false);
                    }
                } else {
                    setCheckPlayTime(true);
                    setStatus({
                        ...status,
                        lastPaused: currentPosition,
                    });
                }
            }
        }
        // Video just finished, go Back
        if (liveStatus.didJustFinish) {
            navigation.goBack();
        }
    };

    const height = useWindowDimensions().height;
    return (
        <Pressable style={styles.container} onPress={() => toggleButtonVisiblity()}>
            {status.isPlaying && playPauseButtonVisiblity && (
                <Pressable
                    onPress={() => {
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
                    }}
                    style={[styles.playPauseContainer, { top: height / 2.3 }]}
                    hitSlop={{ top: 40, right: 40, bottom: 40, left: 40 }}
                >
                    <FontAwesome name="pause" size={35} color="white" />
                </Pressable>
            )}
            {!status.isPlaying && playPauseButtonVisiblity && (
                <Pressable
                    onPress={() => {
                        // console.log("Play Button Pressed");
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();
                    }}
                    style={[styles.playPauseContainer, { top: height / 2.3 }]}
                    hitSlop={{ top: 40, right: 40, bottom: 40, left: 40 }}
                >
                    <FontAwesome name="play" size={35} color="white" />
                </Pressable>
            )}
            {!playPauseButtonVisiblity && (
                <FontAwesome
                    name="play"
                    size={35}
                    color="transparent"
                    style={[styles.playPauseContainer, { top: height / 2.3 }]}
                />
            )}
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: route.params.url,
                }}
                useNativeControls={false}
                resizeMode="cover"
                resizeMode="contain"
                isLooping={false}
                onPlaybackStatusUpdate={(liveStatus) => {
                    handlePlayBackUpdate(liveStatus);
                }}
                shouldPlay={true}
                hitSlop={500}
                // posterSource={require("../assets/loading.jpg")}
                // posterStyle={{ flex: 1, alignItems: "center", justifyContent: "center" }}
                // usePoster={true}
                // onReadyForDisplay={(data) => console.log(data)}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // backgroundColor: "#ecf0f1",
        backgroundColor: "black",
        // flexDirection: "row",
    },
    video: {
        // alignSelf: "center",
        width: "100%",
        // width: 320,
        // height: 200,
        height: "100%",
        // backgroundColor: "red",
    },
    playPauseContainer: {
        position: "absolute",
        alignSelf: "center",
        zIndex: 15,
        // marginLeft: 180,
        // marginTop: 100,
        // marginBottom: -110,
    },
});
