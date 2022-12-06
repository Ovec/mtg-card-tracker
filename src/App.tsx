import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

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
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 loading={loading}
              cardList={cardList}
              setLoading={setLoading}
              setCardList={setCardList}
              setSearchTerm={setSearchTerm}
            />
          </Route>
          <Route path="/tab3">
            <Tab3
              loading={loading}
              setLoading={setLoading}
              cardList={cardList}
              setCardList={setCardList}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              cardDetail={cardDetail as Card}
              setCardDetail={setCardDetail}

            />
          </Route>
          <Route path="/tab4">
            <Tab4
              loading={loading}
              setLoading={setLoading}
              setSearchTerm={setSearchTerm}
            />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Enter page</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon icon={square} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
};

export default App;
