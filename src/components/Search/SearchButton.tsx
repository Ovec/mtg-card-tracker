import { IonButton, IonIcon } from "@ionic/react";
import { search } from "ionicons/icons";

const SearchButton = () => {
    return (
        <IonButton routerLink={"/search"}>
            <IonIcon slot="start" icon={search}></IonIcon>
            CARD SEARCH
        </IonButton>
    );
};

export default SearchButton;