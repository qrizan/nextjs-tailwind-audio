import { useState } from "react";
import Marquee from "react-fast-marquee";
import { IPlaying } from "../../entities/base"
import MusicPlayer from "./MusicPlayer"

const Playing = ({ songUrl, songArtist, songCover, songName}: IPlaying) => {
    const [playSong, setPlaySong] = useState(false)

    return (
        <div className="flex flex-col">
            <div className="flex">
                <img className='w-28 h-28 object-cover' alt='User avatar' src={songCover} />
                <div className="flex flex-col p-2 w-full">
                    <span className="flex text-xs text-gray-700 uppercase font-medium ">
                        <svg className="mr-1 h-4 w-4 text-gray-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="6" cy="17" r="3" />  <circle cx="16" cy="17" r="3" />  <polyline points="9 17 9 4 19 4 19 17" />  <line x1="9" y1="8" x2="19" y2="8" /></svg>
                        <Marquee style={{fontSize:10}} play={playSong}>{songName}</Marquee>
                    </span>
                    <MusicPlayer songUrl={songUrl} setPlaySong={setPlaySong} />
                    <span className="text-xs text-gray-500 uppercase font-medium ">
                        By {songArtist}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Playing