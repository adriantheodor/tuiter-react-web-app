import React from "react";
import posts from "../posts.json";

const ConditionalPhoto = (
    {
        post = {
            "_id": 321,
            "isRetweet": true,
            "retweetAuthor": "Elon Musk",
            "topic": "Space",
            "userName": "SpaceX",
            "handle": "SpaceX",
            "title": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon -> <a href='spacex.com/updates'>spacex.com/updates</a>",
            "time": "23h",
            "commentNumber": 595,
            "retweetNumber": 1168,
            "likeNumber": "11.1K",
            "partOfThread": true,
            "avatarImage": "spacex.png",
            "isVerified": true,
            "image": "titos.png",
            "postHasImage": true
        }
    }
) => {
    if(post.postHasImage) {
        return (<img width={70}
                     className="wd-round mt-2"
                     src={`../images/${post.image}`}/>) } else {
        return (
            <div className="row">
                <div className="col-1">
                    <img width={25}
                         className="rounded-circle mt-2"
                         src={`../images/${post.avatarImage}`}/>
                </div>

                <div className="col-11 ps-1">

                </div>
            </div>
        ); }
};
export default ConditionalPhoto;