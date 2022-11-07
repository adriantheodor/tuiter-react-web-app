import React from "react";
import {useSelector} from "react-redux";
import {likeTuit, unlikeTuit} from "./tuits-reducer";
import {useState} from "react";
import TuitItem from "./TuitItem";

const TuitSummaryList = () => {
    const tuitsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/>)
            }
        </ul>
    );
};
export default TuitSummaryList;