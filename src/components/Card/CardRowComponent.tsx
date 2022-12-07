import { useHistory } from "react-router-dom";
import { IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonRow } from '@ionic/react';
import { Dispatch } from 'react';
import { Card } from './CardType';

const CardRow: React.FC<{
    card: Card,
    cardDeleteHandler: Dispatch<any>,
    cardClickHandler: Dispatch<any>
}> = ({ card, cardDeleteHandler, cardClickHandler }) => {
    const history = useHistory();

    return (
        <IonItemSliding key={card.id} onIonDrag={(ev) => {
            ev.target.getSlidingRatio().then(ratio => {
                if (ratio > 2) cardDeleteHandler(card.id)
            });
        }}>
            <IonItem>
                <IonRow onClick={() => {
                    cardClickHandler(card.id)
                    history.push('/detail')
                }
                }>
                    <IonCol size="auto"><img alt={card.name} src={card.image_uris.small} /></IonCol>
                    <IonCol>            <IonCardHeader>
                        <IonCardTitle>{card.name}</IonCardTitle>
                    </IonCardHeader>
                        <IonCardContent>
                            {card.oracle_text.length > 70
                                ? card.oracle_text.substring(0, 70) + '...'
                                : card.oracle_text}
                        </IonCardContent>
                    </IonCol>
                </IonRow>
            </IonItem>
            <IonItemOptions>
                <IonItemOption color="danger" onClick={() => cardDeleteHandler(card.id)}>Delete</IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    );
}
export default CardRow;