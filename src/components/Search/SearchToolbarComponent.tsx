import { IonHeader, IonProgressBar, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { Dispatch, SetStateAction } from 'react';

const SeachToolbar: React.FC<{
    cardNames: string[], loading: boolean,
    setSelectedCardnames: Dispatch<SetStateAction<string[]>>,
    setLoading: Dispatch<SetStateAction<boolean>>
}> = ({ cardNames, loading, setSelectedCardnames, setLoading }) => {

    const handleChange = (ev: Event) => {
        setLoading(true)
        let query = ""
        const target = ev.target as HTMLIonSearchbarElement
        if (target) query = target.value!.toLowerCase()

        if (query.length > 2) {
            setSelectedCardnames(cardNames.filter(d => d.toLowerCase().indexOf(query) > -1))
        } else {
            setSelectedCardnames([])
        }
        setLoading(false)
    }


    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Card search</IonTitle>
                <IonProgressBar type="indeterminate" hidden={!loading}></IonProgressBar>
            </IonToolbar>
            <IonToolbar>
                <IonSearchbar onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
            </IonToolbar>
        </IonHeader>
    );
}
export default SeachToolbar;