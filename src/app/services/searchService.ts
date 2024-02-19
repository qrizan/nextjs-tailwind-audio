import axios from 'axios'

const SearchService = async ( text : string, setLoader: any) => {
    setLoader(true)
    
    const options = {
        method: 'GET',
        url: `https://${process.env.NEXT_PUBLIC_API_HOST}/search/`,
        params: {
            q: text,
            type: 'tracks',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
        },
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
        }
    };

    try {
        const response = await axios.request(options);
        setLoader(false)
        return response.data.tracks.items;
    } catch (error) {
        setLoader(false)
        console.error(error);
    }
}

export default SearchService