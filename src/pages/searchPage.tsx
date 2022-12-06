import { IonPage } from '@ionic/react';
import SeachToolbar from '../components/Search/SearchToolbarComponent';
import SearchResults from '../components/Search/SearchResultsComponent';
import './searchPage.css';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import fetchCardNames from '../api/cardNames';


const SearchPage: React.FC<{
  loading: boolean,
  setLoading: Dispatch<SetStateAction<boolean>>
  setSearchTerm: Dispatch<SetStateAction<string>>
}> = ({ loading, setLoading, setSearchTerm }) => {
  const result: string[] = [];
  const [cardNames, setCardNames] = useState([])
  const [selectedCardNames, setSelectedCardNames] = useState(result)


  useEffect(() => {
    fetchCardNames(setCardNames);
  }, [])

  return (
    <IonPage>
      <SeachToolbar
        cardNames={cardNames}
        setSelectedCardnames={setSelectedCardNames}
        loading={loading}
        setLoading={setLoading}
      />

      <SearchResults
        selectedCardNames={selectedCardNames}
        setSearchTerm={setSearchTerm}
      />
    </IonPage>
  );
};

export default SearchPage;
