import { IonContent, IonItem, IonList } from '@ionic/react';

const SearchResults: React.FC<{ selectedCardNames: string[] }> = ({ selectedCardNames }) => {
    return (
        <IonContent>
            <IonList>
                {selectedCardNames.map(name => {
                    return <IonItem key={name}>{name}</IonItem>
                })}
            </IonList>
        </IonContent>
    );
}
export default SearchResults;