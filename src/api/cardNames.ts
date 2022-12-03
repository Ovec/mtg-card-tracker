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



        // const response = await axios.get('https://api.scryfall.com/catalog/card-names')

        // console.warn(storedEtag, response.headers, response.statusText)



        // const response = await axios.get(`https://exercise.cngroup.dk/api/recipes${slug ? `/${slug}` : ''}`)
        // setError(false)
        // setLoading(false)
        // setData(response.data)
    } catch (error) {
        console.warn(error)
        // setError('apinotreachable')
        // openNotificationWithIcon('error', 'API error', 'Recept se nepodařilo načíst')
    }

}

export default fetchCardNames;