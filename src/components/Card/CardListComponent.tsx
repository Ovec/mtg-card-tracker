import { IonList } from "@ionic/react"
import { Dispatch, SetStateAction } from "react"
import { save } from "../../storage/cardList"
import CardRow from "./CardRowComponent"
import { Card } from "./CardType"


const CardList: React.FC<{
    cards: Card[],
    setCardList: Dispatch<SetStateAction<Card[]>>
    setSearchTerm: Dispatch<SetStateAction<string>>
}> = ({ cards, setCardList, setSearchTerm }) => {
    return <IonList>{cards.map(card => {
        return <CardRow card={card} key={card.id}
            cardDeleteHandler={() => {
                let updatedCardlist = cards.filter(c => c.id !== card.id)
                setCardList(updatedCardlist)
                save(updatedCardlist)
            }}
            cardClickHandler={(id: string) => setSearchTerm(id)}
        />
    })}</IonList>
}



export default CardList