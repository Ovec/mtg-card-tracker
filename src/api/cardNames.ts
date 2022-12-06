import axios from 'axios';
import { get, set } from "../storage/preferences";



const fetchCardNames = async (setCardNames: any) => {
    try {
        const now = Date.now();
        const storedLastUpdate = await get("lastUpdate")

        if (!storedLastUpdate || now > new Date(storedLastUpdate).valueOf() + 24 * 60 * 60 * 1000) {
            const response = await axios.get('https://api.scryfall.com/catalog/card-names')
            const cardNames = response.data.data;
            setCardNames(cardNames);


            set("cardNames", JSON.stringify(cardNames))
            set("lastUpdate", '' + now)
        } else {
            setCardNames(JSON.parse(await get("cardNames") as string));
        }
    } catch (error) {
        console.warn(error)
    }

}

export default fetchCardNames;