import { IonContent, IonItem, IonList } from '@ionic/react';
import { Dispatch, SetStateAction } from 'react';

const SearchResults: React.FC<{
    selectedCardNames: string[],
    setSearchTerm: Dispatch<SetStateAction<string>>
}> =
    ({ selectedCardNames, setSearchTerm }) => {

        return (
            <IonContent>
                <IonList>
                    {selectedCardNames.map(name => {
                        return <IonItem routerLink={"/detail"}
                            key={name}
                            onClick={() => setSearchTerm(name)}>
                            {name}
                        </IonItem>
                    })}
                </IonList>
            </IonContent>
        );
    }
export default SearchResults;

