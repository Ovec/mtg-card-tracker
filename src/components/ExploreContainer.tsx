import { IonButton, IonIcon } from '@ionic/react';
import { search } from 'ionicons/icons';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton>
        <IonIcon slot="start" icon={search}></IonIcon>
        Card search
      </IonButton>
      <p>There are no cards in your portfolio</p>
    </div>
  );
};

export default ExploreContainer;
