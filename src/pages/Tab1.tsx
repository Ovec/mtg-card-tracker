import { IonContent, IonHeader, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import CardList from '../components/Card/CardListComponent'
import { Card } from '../components/Card/CardType';
import SearchContainer from '../components/Search/SearchContainer';
import './Tab1.css';

const Tab1: React.FC<{
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

        card list component
        card component
        detail handle
        delete handler
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
