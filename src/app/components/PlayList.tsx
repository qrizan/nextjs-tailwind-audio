"use client"
import PlayingService from "../services/playingService"
import { IPlayList } from "../entities/base"
import { millisToMinutesAndSeconds } from "../utils/utils.js"
import { maximumText } from "../utils/utils.js"

const PlayList = ({ setText, setActiveSong, setLoadingSong, songs, screenWidth }: IPlayList) => {
    const maxStringTitle = (screenWidth <= 434) ? 30 : 50

    const handleClick = async (event: any) => {
        setActiveSong()
        setText(event.target.id)

        const track = await PlayingService(event.target.id, setLoadingSong)

        setActiveSong({
            songId: event.target.id,
            songName: event.target.dataset.songname,
            songUrl: track.preview_url,
            songCover: track.album.images[1].url,
            songArtist: track.album.artists[0].name,
        })
    }

    return (
            <div className="
                mt-4
                bg-white 
                text-white
                shadow-md rounded-lg">
                <ul role="list" className="divide-y divide-gray-100 p-2">
                    {songs.map((song, index) => (
                        <li
                            key={index + 1}
                            className="flex justify-between gap-x-6 p-2 "
                        >
                            <div className="flex gap-x-4 ">
                                <img className="
                                    h-12 w-12 
                                    flex-none 
                                    rounded-full 
                                    bg-gray-50" src={song.cover} alt="" />
                                <div className="w-full">
                                    <div className="
                                        flex 
                                        items-center 
                                        font-bold 
                                        hover:text-orange-600 
                                         text-gray-900 "
                                    >
                                        <svg className="h-4 w-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <polygon points="10 8 16 12 10 16 10 8" /></svg>

                                        <div className="ml-2 cursor-pointer text-sm"
                                            id={song.id}
                                            data-songname={song.name}
                                            onClick={handleClick}
                                        >{maximumText(song.name, maxStringTitle)}</div>
                                    </div>
                                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                                        {song.artist}
                                    </p>
                                </div>
                            </div>

                            <div className="shrink-0">
                                <p className="mt-1 text-xs leading-5 text-gray-500">
                                    {millisToMinutesAndSeconds(song.duration)} minutes
                                </p>
                            </div>

                        </li>


                    ))}


                </ul>
            </div>


    );
}

export default PlayList