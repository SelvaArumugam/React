const RestaurentCard = (props) =>{
    const data = props.resData;
    return (
        <div className="res-card">
            <img src= {data.info.image.url}></img>
            <h4>{data.info.name}</h4>
            <h4>{data.info.locality.name}</h4>
            <h4 style={{color : "#" + data.info.rating.rating_color}} >{data.info.rating.aggregate_rating}</h4>
            <h4 style={{color : data.info.timing.color}}>{data.info.timing.text}</h4>
        </div>
    );
}
export default RestaurentCard;