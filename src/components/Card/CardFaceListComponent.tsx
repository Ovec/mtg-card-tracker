import CardFaceDisplay from "./CardFaceComponent"
import { CardFace } from "./CardType"


const CardFaceList: React.FC<{ faces: CardFace[] }> = ({ faces }) => {
    return <>{faces.map(face => {
        return <CardFaceDisplay face={face} key={face.name} />
    })}</>
}



export default CardFaceList