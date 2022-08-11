function Card(props){
    return (
        <div className="card">
            
            <div className="card-info">
                <img className="icon" src={props.path}></img>
                <h3>{props.name}</h3>
                <div className="box">
                    <span className="tag">Вселенная:</span>
                    <span className="text">{props.universe}</span>
                </div>
                <div className="box">
                    <span className="tag">Альтер-эго:</span>
                    <span className="text">{props.ego}</span>
                </div>
                <div className="box">
                    <span className="tag">Род деятельносии:</span>
                    <span className="text">{props.occupation}</span>
                </div>
                <div className="box">
                    <span className="tag">Друзья:</span>
                    <span className="text">{props.friends}</span>
                </div>
                <div className="box">
                    <span className="tag">Супер сила:</span>
                    <span className="text">{props.power}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;