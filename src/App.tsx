import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SearchPage from './pages/searchPage';
import DetailPage from './pages/detailPage';
import ListPage from './pages/listPage';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';
import getCardList from './api/cardList';
import { Card } from './components/Card/CardType';


setupIonicReact();



const App: React.FC = () => {
  const EmptyCard: Partial<Card> = {};
  const emptyCardList: Card[] = []
  const [loading, setLoading] = useState(false)
  const [cardList, setCardList] = useState(emptyCardList);
  const [searchTerm, setSearchTerm] = useState('')
  const [cardDetail, setCardDetail] = useState(EmptyCard)

  useEffect(() => {
    getCardList(setCardList, setLoading);
  }, [setLoading])

  return <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/list">
          <ListPage loading={loading}
            cardList={cardList}
            setLoading={setLoading}
            setCardList={setCardList}
            setSearchTerm={setSearchTerm}
          />
        </Route>
        <Route path="/detail">
          <DetailPage
            loading={loading}
            setLoading={setLoading}
            cardList={cardList}
            setCardList={setCardList}
            searchTerm={searchTerm}
            cardDetail={cardDetail as Card}
            setCardDetail={setCardDetail}

          />
        </Route>
        <Route path="/search">
          <SearchPage
            loading={loading}
            setLoading={setLoading}
            setSearchTerm={setSearchTerm}
          />
        </Route>
        <Route exact path="/">
          <Redirect to="/list" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
};

export default App;
