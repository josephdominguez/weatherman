import { createContext, useContext, useState } from 'react';
import { tracks } from '@config/config';

const selectRandomTrack = () => {
    const randomIndex = Math.floor(Math.random() * tracks.length);
    const selectedTrack = tracks[randomIndex].path;
    return selectedTrack;
}

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => {
    return useContext(MusicPlayerContext);
};

export const MusicPlayerProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const togglePlayer = () => {
        if (!isPlaying) {
            const randomTrack = selectRandomTrack();
            setCurrentTrack(randomTrack);
        }
        setIsPlaying(!isPlaying);
    };

    const selectNextTrack = () => {
        return selectRandomTrack();
    }

    return (
        <MusicPlayerContext.Provider value={{ currentTrack, setCurrentTrack, selectNextTrack, isPlaying, togglePlayer, }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};
