import { IonPage } from '@ionic/react';
import { Dispatch, SetStateAction, useEffect } from 'react';
import fetchCard from '../api/cardDetail';
import CardDetail from '../components/Card/CardDetailComponent';
import { Card } from '../components/Card/CardType';
import { save } from '../storage/cardList';
import './detailPage.css';

const DetailPage: React.FC<{
  loading: boolean,
  cardDetail: Card,
  cardList: Card[],
  searchTerm: string,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setCardList: Dispatch<SetStateAction<Card[]>>,
  setCardDetail: Dispatch<SetStateAction<Partial<Card>>>
}> = ({ loading,
  cardList,
  cardDetail,
  searchTerm,
  setCardList,
  setLoading,
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
            let updatedCardlist = cardList.filter(c => c.id !== card.id)
            await save(updatedCardlist)
            setCardList(updatedCardlist)

          } : async (card) => {
            await save([...cardList, card])
            setCardList([...cardList, card])

          }
          }
          inList={!!localCard} />
      </IonPage>
    );
  };

export default DetailPage;


