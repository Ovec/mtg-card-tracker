const CardSet: React.FC<{ set: string, setUrl: string }> = ({ set, setUrl }) => {
    return <div className="ion-padding" > Set: <a href={setUrl}>{set}</a></div >

}

export default CardSet