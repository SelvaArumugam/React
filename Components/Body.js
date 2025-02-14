import resobj from "../Utils/res-data";
import RestaurentCard from "./RestaurentCard";
const Body = () => {
    return (
        <div>
            <div className="res-container">
                {
                    resobj.map((mydata) => <RestaurentCard key={mydata.info.resId} resData = {mydata}></RestaurentCard>)
                }
            </div>
        </div>
    );
}
export default Body;