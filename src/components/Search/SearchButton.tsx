import { IonButton, IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

const SearchButton = () => {
    return (
        <IonButton>
            <IonIcon slot="start" icon={search}></IonIcon>
            CARD SEARCH
        </IonButton>
    );
};

export default SearchButton;