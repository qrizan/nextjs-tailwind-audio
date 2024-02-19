export interface ISong {
    id?: string,
    name?: string,
    cover?: string,
    duration?: string,
    artist?: string
}

export interface IPlayList {
    setText: any,
    setActiveSong: any,
    setLoadingSong: any,
    screenWidth: number,
    songs: ISong[]
}

export interface ISearch {
    text: string,
    setText: any,
    setSongs: any,
    screenWidth: number
}

export interface IMediaPlayer {
    activeSong: any,
    loadingSong: boolean
}

export interface IPlaying {
    songUrl: string,
    songName: string,
    songCover: string,
    songArtist: string,
}