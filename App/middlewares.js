import { mapVideoUrl } from "./data";

export const handleUrl = (url, navigation) => {
    if (url.includes("youtu")) {
        const video = mapVideoUrl.find((ytVideo) => {
            if (ytVideo.youtubeUrl === url) {
                return ytVideo.videoUrl;
            }
        });
        video &&
            navigation.navigate("VideoScreen", {
                title: "",
                url: video.videoUrl,
            });
    }
};
