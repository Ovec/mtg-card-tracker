import { IonPage } from '@ionic/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useParams } from "react-router";
import fetchCard from '../api/cardDetail';
import CardDetail from '../components/Card/CardDetailComponent';
import { Card } from '../components/Card/CardType';
import './Tab3.css';



const Tab3: React.FC<{ loading: boolean, setLoading: Dispatch<SetStateAction<boolean>> }> = ({ loading, setLoading }) => {
  const EmptyCard: Partial<Card> = {};
  const { searchTerm: search } = useParams<{ searchTerm: string }>();
  const [searchTerm,] = useState(search)
  const [cardDetail, setCardDetail] = useState(EmptyCard)

  useEffect(() => {
    console.log('i fire once');
    fetchCard(searchTerm, setCardDetail, setLoading);
  }, [searchTerm, setLoading])

  return (
    <IonPage>
      <CardDetail cardDetail={cardDetail as Card} loading={loading} />
    </IonPage>
  );
};

export default Tab3;


