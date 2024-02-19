import { IMediaPlayer } from "../../entities/base"
import Playing from "./Playing"
import Iddle from "../Iddle"

const MediaPlayer = ({ activeSong, loadingSong}: IMediaPlayer) => {
    const status = activeSong?.songName === undefined ? false : true

    const label = status ? <Playing 
        songUrl={activeSong?.songUrl} 
        songName={activeSong?.songName} 
        songCover={activeSong?.songCover}
        songArtist={activeSong?.songArtist}
    /> : <Iddle loadingSong={loadingSong}  />

    return (
            <div className="
                overflow-hidden 
                bg-white 
                text-white 
                shadow-md 
                rounded-lg">
                {label}
            </div>
    );
}

export default MediaPlayer