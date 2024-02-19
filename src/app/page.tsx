"use client"
import React, { useState, useEffect } from "react"
import PlayList from "./components/PlayList";
import Search from "./components/Search";
import MediaPlayer from "./components/Player/MediaPlayer";

const Home = () => {
    const [text, setText] = useState('')
    const [songs, setSongs] = useState([])
    const [activeSong, setActiveSong] = useState()
    const [loadingSong, setLoadingSong] = useState(false)
    const [screenWidth, setScreenWidth] = useState(0);


    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    return (
        <div className="grid justify-items-center bg-gray-100">
            <div className="h-screen md:w-1/3 lg:w-1/3 sm:w-full">

            <Search
                setText={setText}
                setSongs={setSongs}
                text={text}
                screenWidth={screenWidth}
                />

            <MediaPlayer 
                activeSong={activeSong}  
                loadingSong={loadingSong}
            />

            <PlayList
                setText={setText}
                songs={songs}
                setActiveSong={setActiveSong}
                setLoadingSong={setLoadingSong}
                screenWidth={screenWidth}
            />
            </div>
        </div>


    );
}

export default Home