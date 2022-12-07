import { useHistory } from "react-router-dom";
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import { add, cart, chevronUpCircle, globe, remove } from 'ionicons/icons';
import { Dispatch, SetStateAction, useState } from 'react';
import CardFaceDisplay from './CardFaceComponent';
import CardFaceList from './CardFaceListComponent';
import CardLegalities from './CardLegalities';
import CardSet from './CardSetComponent';
import { Card } from './CardType';

const CardDetail: React.FC<{
    cardDetail: Card;
    loading: boolean,
    inList: boolean,
    handler: Dispatch<SetStateAction<any>>
}> = ({ cardDetail, loading, inList, handler }) => {
    const history = useHistory();

    const [imgLoaded, setImgLoaded] = useState(false);

    return loading || !cardDetail.name ? (<IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonBackButton />
            </IonButtons>
            <IonTitle>Loading...</IonTitle>
            <IonProgressBar type="indeterminate"></IonProgressBar>
        </IonToolbar>
    </IonHeader>) : (<>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton />
                </IonButtons>
                <IonTitle>{cardDetail.name}</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
            <IonCard>
                <IonCardHeader className='ion-text-center' >
                    <img style={imgLoaded ? {} : { display: 'none' }} alt={cardDetail.name} src={cardDetail.image_uris.normal} onLoad={() => setImgLoaded(true)} />
                </IonCardHeader>
                <IonCardContent>
                    {
                        cardDetail.card_faces ? <CardFaceList faces={cardDetail.card_faces} />
                            : <CardFaceDisplay face={{
                                object: cardDetail.object,
                                name: cardDetail.name,
                                mana_cost: cardDetail.mana_cost,
                                type_line: cardDetail.type_line,
                                oracle_text: cardDetail.oracle_text,
                                artist: cardDetail.artist,
                                artist_id: cardDetail.artist,
                            }} key={cardDetail.name} />
                    }
                    <CardSet set={cardDetail.set_name} setUrl={cardDetail.scryfall_set_uri} />
                    <CardLegalities legalities={cardDetail.legalities} />
                </IonCardContent>
            </IonCard>
            <IonFab slot="fixed" vertical="bottom" horizontal="end">
                <IonFabButton>
                    <IonIcon icon={chevronUpCircle}></IonIcon>
                </IonFabButton>
                <IonFabList side="top">

                    {inList ? <IonFabButton color="danger" onClick={() => {
                        handler(cardDetail)
                        history.push('/list')
                    }}><IonIcon icon={remove}></IonIcon></IonFabButton> :
                        <IonFabButton color="success" onClick={() => {
                            handler(cardDetail)
                            history.push('/list')
                        }}><IonIcon icon={add}></IonIcon></IonFabButton>}


                    {cardDetail.purchase_uris?.cardmarket
                        && <IonFabButton color="success" href={cardDetail.purchase_uris.cardmarket}><IonIcon icon={cart}></IonIcon>
                        </IonFabButton>}
                    <IonFabButton color="primary" href={cardDetail.related_uris.gatherer}>
                        <IonIcon icon={globe}></IonIcon>
                    </IonFabButton>
                </IonFabList>
            </IonFab>
        </IonContent >
    </>
    )

}
export default CardDetail;