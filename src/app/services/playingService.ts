import axios from 'axios'

const PlayingService = async ( ids : string, setLoadingSong: any) => {
    setLoadingSong(true)

    const options = {
        method: 'GET',
        url: `https://${process.env.NEXT_PUBLIC_API_HOST}/tracks/`,
        params: {
          ids: ids
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
        }
      };
      
      try {
          const response = await axios.request(options);
          setLoadingSong(false)
          return response.data.tracks[0];
      } catch (error) {
        setLoadingSong(false)
          console.error(error);
      }

}

export default PlayingService


