import React from "react";
import ConditionalPicture from "./conditional-photo";
import "./index.css";
const PostItem = (
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
            "retweeted": true,
            "retweetNumber": 1168,
            "retweetedUserName": "Elon Musk",
            "likeNumber": "11.1K",
            "partOfThread": true,
            "avatarImage": "TheTitos.jpeg",
            "isVerified": true,
            "image": "tesla.png",
            "retweetAvatar": "",
            "retweetHandle": "",
            "retweetPost": "",
            "retweetTime": "",
            "postHasImage": true,
            "hasThread": true
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className={`row ${post.retweeted ?'' : 'd-none'}`}>
                <div className="col-1">
                    <i className="bi bi-repeat"></i>
                </div>
                <div className="col">
                    {post.retweetedUserName} Retweeted
                </div>

            </div>
            <div className="row">
                <div className="col-1">
                    <img src={`${post.avatarIcon}`} className="rounded-circle" height={48}
                         alt="Avatar"/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <span className="fw-bolder">{post.userName}</span>
                            <span className="text-primary"><i className="bi bi-patch-check-fill"></i></span>
                            <span className="text-secondary">@{post.handle} · {post.time}</span>
                        </div>
                        <div className="col-1 text-secondary">
                            <i className="bi bi-three-dots"></i>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p>{post.title}<span className="text-primary">{post.link}</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className={`${post.retweet?'d-none':''}`}>
                                <img src={post.image} className="w-100" alt="Tuit Img"/>
                            </div>
                            <div className={`${!post.retweet?'d-none':''}`}>
                                <div className="row">
                                    <div className="col">
                                        <img height={24} className="rounded-circle"
                                             src={post.retweetAvatar} alt="Retweeter"/>
                                        <span className="fw-bolder">{post.retweetedUserName}</span>
                                        <span className="text-primary">
                                            <i className="bi bi-patch-check-fill"></i>
                                        </span>
                                        <span className="text-secondary">
                                            @{post.retweetHandle} · {post.retweetTime}
                                        </span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p>{post.retweetPost}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row text-secondary">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-3">
                                    <i className="bi bi-chat fs-5"></i>
                                </div>
                                <div className="col">
                                    {post.comments}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-3">
                                    <i className="bi bi-repeat fs-5"></i>
                                </div>
                                <div className="col">
                                    {post.retweetNumber}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <div className="col-3">
                                    <i className="bi bi-heart fs-5"></i>
                                </div>
                                <div className="col">
                                    {post.likeNumber}
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <i className="bi bi-upload fs-5"></i>
                        </div>
                    </div>
                    <div className={`row mt-3 ${post.hasThread?'':'d-none'}`}>
                        <div className="col-4 text-primary">
                            Show this thread
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
};
export default PostItem;