import wording from "../utils/wording.json"

const Iddle = ({ loadingSong }: any) => {
    const textIddle = (loadingSong) ? wording.loading  : wording.iddle 

    const imgSrc = `https://fakeimg.pl/1000x160/d1d5db,128/000,255/?text=${textIddle}`
    return (
        <div className="flex flex-col">
            <div className="flex">
                <img className='h-28 object-cover' alt='User avatar' src={imgSrc} />
            </div>
        </div>
)}

export default Iddle

