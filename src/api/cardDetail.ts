import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { Card } from '../components/Card/CardType';



const fetchCard = async (searchTerm: string,
    setCardDetail: Dispatch<SetStateAction<Partial<Card>>>,
    setLoading: Dispatch<SetStateAction<boolean>>) => {

    try {
        setLoading(true)
        console.warn('Fetching - ', searchTerm)
        const response = await axios.get(`https://api.scryfall.com/cards/named?exact=${searchTerm}`)
        setCardDetail(response.data);
        setLoading(false)

    } catch (error) {
        console.warn(error)
    }

}

export default fetchCard;