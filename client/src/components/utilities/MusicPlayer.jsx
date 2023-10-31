// MusicPlayer.js
import React from 'react';
import ReactPlayer from 'react-player';
import { useMusicPlayer } from '@contexts/MusicPlayerContext';

const MusicPlayer = () => {
    const { currentTrack, isPlaying, randomTrack } = useMusicPlayer();
    randomTrack();
    return (
        <div>
            <ReactPlayer
                url={currentTrack}
                playing={isPlaying}
                controls={false}
                height="0px"
                width="0px"
            />
        </div>
    );
};

export default MusicPlayer;