import { IonCard, IonCardContent, IonCardHeader, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { chevronUpCircle, globe, remove, cart } from 'ionicons/icons';
import CardFaceList from './CardFaceListComponent';
import CardLegalities from './CardLegalities';
import { Card } from './CardType';

const CardDetail: React.FC<{ card: Card; }> = ({ card }) => {
    return (<>
        <IonHeader>
            <IonToolbar>
                <IonTitle>{card.name}</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonCard>
                <IonCardHeader>
                    <div>
                        <img alt={card.name} src={card.image_uris.normal} />
                    </div>
                </IonCardHeader>
                <IonCardContent>
                    <CardFaceList faces={card.card_faces} />
                    <CardLegalities legalities={card.legalities} />
                </IonCardContent>
            </IonCard>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={chevronUpCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="top">
                    <IonFabButton color="danger">
                        <IonIcon icon={remove}></IonIcon>
                    </IonFabButton>
                    <IonFabButton color="success" href={card.purchase_uris.cardmarket}>
                        <IonIcon icon={cart}></IonIcon>
                    </IonFabButton>
                    <IonFabButton color="primary" href={card.related_uris.gatherer}>
                        <IonIcon icon={globe}></IonIcon>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
        </IonContent >
    </>
    )

}
export default CardDetail;