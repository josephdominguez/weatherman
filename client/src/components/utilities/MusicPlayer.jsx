import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useMusicPlayer } from "@contexts/MusicPlayerContext";

const MusicPlayer = () => {
    const { currentTrack, setCurrentTrack, selectNextTrack, isPlaying } = useMusicPlayer();
    const [nextTrack, setNextTrack] = useState(null);

    const handleEnded = () => {
        if (isPlaying) {
            setCurrentTrack(nextTrack);
        }
    };

    const handleProgress = (state) => {
        if (state.loaded && state.played >= 0.9) {
            const nextTrackUrl = selectNextTrack();
            setNextTrack(nextTrackUrl);

            // Preload the next track
            const audio = new Audio(nextTrackUrl);
            audio.preload = 'auto';
            audio.load();
        }
    };

    // Select new track upon component mounting.
    useEffect(() => {
        setCurrentTrack(selectNextTrack());
    }, [selectNextTrack]);

    return (
        <div>
            <ReactPlayer
                url={currentTrack}
                playing={isPlaying}
                controls={false}
                onEnded={handleEnded}
                onProgress={handleProgress}
                height="0px"
                width="0px"
            />
        </div>
    );
};

export default MusicPlayer;
