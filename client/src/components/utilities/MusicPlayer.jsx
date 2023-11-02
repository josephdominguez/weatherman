import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { useMusicPlayer } from "@contexts/MusicPlayerContext";

const MusicPlayer = () => {
    const { currentTrack, setCurrentTrack, selectNextTrack, isPlaying } = useMusicPlayer();
    const [nextTrack, setNextTrack] = useState(null);
    const [playerReady, setPlayerReady] = useState(false);

    const handleReady = () => {
        setPlayerReady(true);
    };

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

    useEffect(() => {
        if (isPlaying && !playerReady) {
            setCurrentTrack(selectNextTrack());
            setPlayerReady(true);
        }
    }, [isPlaying, playerReady, setCurrentTrack, selectNextTrack]);

    return (
        <div>
            {playerReady && (
                <ReactPlayer
                    url={currentTrack}
                    playing={isPlaying}
                    controls={false}
                    onReady={handleReady}
                    onEnded={handleEnded}
                    onProgress={handleProgress}
                    height="0px"
                    width="0px"
                />
            )}
        </div>
    );
};

export default MusicPlayer;
