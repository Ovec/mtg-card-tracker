import { IonPage } from '@ionic/react';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import fetchCard from '../api/cardDetail';
import CardDetail from '../components/Card/CardDetailComponent';
import { Card } from '../components/Card/CardType';
import { save } from '../storage/cardList';
import './Tab3.css';

const Tab3: React.FC<{
  loading: boolean,
  cardDetail: Card,
  cardList: Card[],
  searchTerm: string,
  setSearchTerm: Dispatch<SetStateAction<string>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setCardList: Dispatch<SetStateAction<Card[]>>,
  setCardDetail: Dispatch<SetStateAction<Partial<Card>>>
}> = ({ loading,
  cardList,
  cardDetail,
  searchTerm,
  setCardList,
  setLoading,
  setSearchTerm,
  setCardDetail }) => {


    const localCard = cardList.find(c => c.id === searchTerm || c.name === searchTerm);

    useEffect(() => {
      localCard ? setCardDetail(localCard) : fetchCard(searchTerm, setCardDetail, setLoading);
    }, [searchTerm])

    return (
      <IonPage>
        <CardDetail cardDetail={cardDetail as Card}
          loading={loading}
          handler={localCard ? async (card) => {
            console.warn("delete from list trigger")
            let updatedCardlist = cardList.filter(c => c.id !== card.id)
            await save(updatedCardlist)
            setCardList(updatedCardlist)

          } : async (card) => {
            console.warn("add to list trigger")
            await save(cardList)
            setCardList([...cardList, card])

          }
          }
          inList={!!localCard} />
      </IonPage>
    );
  };

export default Tab3;


