import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <div className="list-group">
            {
                postsArray.map((post) =>
                    <PostSummaryItem
                        key={post._id} post={post}/>)
            }
        </div>
    );
};
export default PostSummaryList;