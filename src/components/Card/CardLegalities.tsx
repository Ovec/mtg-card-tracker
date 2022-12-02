
import { IonChip, IonCol, IonGrid, IonRow } from "@ionic/react"
import { Legalities } from "./CardType"


const CardLeglities: React.FC<{ legalities: Legalities }> = ({ legalities }) => {
    return (<IonGrid>
        <IonRow> {
            Object.keys(legalities).map((keyName, i) => {
                return <IonCol key={i} style={{ textAlign: "center" }}
                >
                    <IonChip color={legalities[keyName as keyof Legalities] === "not_legal" ? "dark" : "success"}>{keyName}</IonChip></IonCol>
            })}
        </IonRow>
    </IonGrid>)
}

export default CardLeglities