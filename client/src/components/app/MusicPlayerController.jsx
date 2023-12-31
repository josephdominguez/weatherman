import { useMusicPlayer } from '@contexts/MusicPlayerContext';

function MusicPlayerController() {
    const { isPlaying, togglePlayer } = useMusicPlayer();

    return (
        <div className='music-player-controller'>
            <h3>Music Player</h3>
            <button onClick={togglePlayer}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    );
}

export default MusicPlayerController;
