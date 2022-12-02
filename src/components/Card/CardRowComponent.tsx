import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/react';

const CardRow = () => {
    return (
        <IonCard>
            <IonGrid>
                <IonRow>
                    <IonCol size="auto"><img alt="Silhouette of mountains" src="https://cards.scryfall.io/small/front/c/e/ced4c824-2dfc-42ae-84e6-09f8e3f51b5b.jpg?1584832255" /></IonCol>
                    <IonCol>            <IonCardHeader>
                        <IonCardTitle>Card Title</IonCardTitle>
                        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>
                        <IonCardContent>

                            Here's a small text description for the card content. Nothing more, nothing less.
                            <br /> <br />
                            <IonButton color="primary">CARD DETAIL</IonButton>
                        </IonCardContent></IonCol>
                </IonRow>
            </IonGrid>


        </IonCard>
    );
}
export default CardRow;