import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';

const SeachToolbar = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>Card search</IonTitle>
            </IonToolbar>
            <IonToolbar>
                <IonSearchbar></IonSearchbar>
            </IonToolbar>
        </IonHeader>
    );
}
export default SeachToolbar;