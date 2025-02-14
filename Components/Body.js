import { useState } from "react";
import resobj from "../Utils/res-data";
import RestaurentCard from "./RestaurentCard";
const Body = () => {
    const [RestaurentList,setRestaurentList] = useState(resobj);
    return (
        <div>
            <div className="filter-btn">
                <button onClick={()=> {
                    let newRestaurentList = RestaurentList.filter((restaurent) => restaurent.info.rating.aggregate_rating > 4.5)
                    setRestaurentList(newRestaurentList);
                }}>Click me for good ones</button>
            </div>
            <div className="res-container">
                {
                    RestaurentList.map((mydata) => <RestaurentCard key={mydata.info.resId} resData = {mydata}></RestaurentCard>)
                }
            </div>
        </div>
    );
}
export default Body;