import { Dispatch, SetStateAction } from "react";
import { Card } from "../components/Card/CardType";
import { get } from "../storage/cardList";

const getCardList = async (
    setCardList: Dispatch<SetStateAction<Card[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>) => {
    try {
        setLoading(true)
        setCardList(await get());
        setLoading(false)

    } catch (error) {
        console.error(error)
    }

}

export default getCardList;