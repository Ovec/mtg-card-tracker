import { IonCol, IonGrid, IonRow, IonText } from "@ionic/react"
import { CardFace } from "./CardType"

const CardFaceDisplay: React.FC<{ face: CardFace }> = ({ face }) => {
    return (<>
        <IonGrid>
            <IonRow>
                <IonCol><h1>{face.name}</h1></IonCol>
                <IonCol size="auto"><div style={{ width: 100, textAlign: "right" }}>{face.mana_cost}</div></IonCol>
            </IonRow>
            <IonRow>
                <div>{face.flavor_name}</div>
                <div>{face.oracle_text}</div>
                <div><IonText color="terciary" style={{ fontStyle: 'italic' }}>Artist: {face.artist}</IonText></div>
            </IonRow>
        </IonGrid></>
    )
}

export default CardFaceDisplay