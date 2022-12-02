import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CardRow from '../components/Card/CardRowComponent';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MTG card tracker</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">MTG card tracker</IonTitle>
          </IonToolbar>
        </IonHeader>
        <CardRow />
        <CardRow />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
