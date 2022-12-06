import { IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonProgressBar, IonTabBar, IonTabButton, IonTitle, IonToolbar } from '@ionic/react';
import { search } from 'ionicons/icons';
import { Dispatch, SetStateAction, useEffect } from 'react';
import CardList from '../components/Card/CardListComponent'
import { Card } from '../components/Card/CardType';
import SearchContainer from '../components/Search/SearchContainer';
import './listPage.css';

const ListPage: React.FC<{
  loading: boolean,
  cardList: Card[],
  setLoading: Dispatch<SetStateAction<boolean>>
  setCardList: Dispatch<SetStateAction<Card[]>>
  setSearchTerm: Dispatch<SetStateAction<string>>
}> = ({ loading, cardList, setLoading, setCardList, setSearchTerm }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MTG card tracker</IonTitle>
          <IonProgressBar type="indeterminate" hidden={!loading}></IonProgressBar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {cardList.length === 0 ? <SearchContainer /> :
          <CardList cards={cardList} setCardList={setCardList} setSearchTerm={setSearchTerm} />}
      </IonContent>
      {cardList.length > 0 &&
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={search} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>}
    </IonPage>
  );
};

export default ListPage;
