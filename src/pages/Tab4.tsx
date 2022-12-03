import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import SeachToolbar from '../components/Search/SearchToolbarComponent';
import SearchResults from '../components/Search/SearchResultsComponent';
import './Tab4.css';




const Tab4: React.FC = () => {
  return (
    <IonPage>
      <SeachToolbar />
      <SearchResults />
    </IonPage>
  );
};

export default Tab4;
