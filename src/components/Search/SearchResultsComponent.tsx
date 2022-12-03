import { IonContent, IonItem, IonList } from '@ionic/react';
import { Dispatch, SetStateAction } from 'react';
import { Card } from '../Card/CardType';

const SearchResults: React.FC<{
    selectedCardNames: string[],
    setCardDetail: Dispatch<SetStateAction<Partial<Card>>>,
    setLoading: Dispatch<SetStateAction<boolean>>
}> =
    ({ selectedCardNames, setCardDetail, setLoading }) => {

        return (
            <IonContent>
                <IonList>
                    {selectedCardNames.map(name => {
                        return <IonItem routerLink="/tab3/" key={name}>{name}</IonItem>
                    })}
                </IonList>
            </IonContent>
        );
    }
export default SearchResults;

