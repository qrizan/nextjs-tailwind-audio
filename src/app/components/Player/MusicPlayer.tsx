import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({songUrl, setPlaySong}: any) => {
    return (
        <AudioPlayer
            autoPlay
            src={songUrl}
            showJumpControls={false}
            layout="horizontal-reverse" 
            onPlay={e => {
                    setPlaySong(true)
                }
            }
            onEnded={e => {
                    setPlaySong(false)
                }
            }
            onPause={e => {
                    setPlaySong(false)
                }
            }
        />
    )
}

export default MusicPlayer