"use client"
import React, { useEffect, useState } from "react"
import searchService from "../services/searchService"
import { ISearch } from "../entities/base"

const Search = ({ text, setText, setSongs, screenWidth }: ISearch) => {
    const [loader, setLoader] = useState(false)

    const getPlayList = async (text: string) => {
        const data = await searchService(text, setLoader)
        const dataSong = data.map((item: any) => ({
            'id': item.data.id,
            'name': item.data.name,
            'cover': item.data.albumOfTrack.coverArt.sources[1].url,
            'duration': item.data.duration.totalMilliseconds,
            'artist': item.data.artists.items[0].profile.name

        }))

        setSongs(dataSong)
    }

    const handleTyping = (event: any) => {
        setText(event.target.value)
    }

    const handleKeyDownEnter = (event: any) => {
        if (event.key === 'Enter') {
            event.preventDefault()

            if (text.length > 0) {
                getPlayList(text)
            }
        }
    }

    const handleSearch = (event: any) => {
        event.preventDefault()

        if (text.length > 0) {
            getPlayList(text)
        } else {
            getPlayList('dream theater')
        }
    }

    useEffect(() => {
        getPlayList('dream theater')
    }, []);

    return (
        <div className="bg-white text-white shadow-md rounded-lg my-4">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <form action="#" method="GET" className="block">
                            <label className="sr-only">Search</label>
                            <div className="mt-1 relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input
                                    onKeyUp={handleTyping}
                                    onKeyDown={() => handleKeyDownEnter(event)}
                                    type="text"
                                    id="topbar-search"
                                    className="
                                            bg-gray-50 
                                            border 
                                            border-gray-300 
                                            text-gray-900 
                                            sm:text-sm 
                                            rounded-lg 
                                            focus:ring-cyan-600 
                                            focus:border-cyan-600 
                                            block pl-10 p-2.5"
                                    placeholder="Search" />
                            </div>
                        </form>
                    </div>
                    <a href="#"
                        onClick={handleSearch}
                        className={`
                            inline-flex 
                            text-white 
                            bg-cyan-600 
                            hover:bg-cyan-700 
                            focus:ring-4 
                            focus:ring-cyan-200 
                            rounded-md
                            px-5 py-2.5
                            text-center 
                            items-center
                            ${screenWidth <= 434 ? "w-25" : "w-32"}
                            `}>
                        {loader ? (
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline my-1 mr-3 w-4 h-4 text-white animate-spin"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                            </svg>
                        )
                            : 'Search'}

                    </a>
                </div>
            </div>
        </div>

    );
}

export default Search