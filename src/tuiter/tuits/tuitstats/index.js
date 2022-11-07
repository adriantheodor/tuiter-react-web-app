import React from "react";
import {useSelector} from "react-redux";

import TuitStatsItem from "./tuit-stats-item";

const TuitStats = () => {

    const statsArray = useSelector((state) => state.tuit );

    return(
        <ul className="list-group">
            {
                statsArray.map(tuit =>
                    <TuitStatsItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );}
    export default TuitStats