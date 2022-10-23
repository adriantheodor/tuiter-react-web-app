import React from "react";
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
            "retweetNumber": 1168,
            "likeNumber": "11.1K",
            "partOfThread": true,
            "avatarImage": "TheTitos.jpeg",
            "isVerified": true,
            "image": "tesla.png"
        }
    }
) => {
    return (
        <li className="list-group-item">

            <div className="row">


                <div className="col-2">

                    <img width={70}
                         className="rounded-circle"
                         src={`/images/${post.avatarImage}`}/>

                </div>


                <div className="col-10">


                    <div className="row">
                        <span className="fw-bolder">
                            {post.userName}

                            <i className="bi
                                      bi-patch-check-fill
                                      wd-blue
                                      m-1
                                      "></i>

                            <span className="text-secondary
                                             fw-normal">@{post.handle} · {post.time}</span>

                            <span className="float-end">
                                <i className="bi
                                              bi-three-dots
                                              text-secondary"></i>
                            </span>
                        </span>
                    </div>

                    <div className="row
                                    m-1">
                        {post.title}
                    </div>


                    <div className="row rounded-2">
                        <img width={70}
                             className="rounded-2
                                        m-1"
                             src={`../images/${post.image}`}/>

                    </div>


                    <div className="row">
                        <div className="col-3
                                        text-secondary">
                            <span>
                                <i className="bi
                                              bi-chat
                                              text-secondary
                                              m-1"></i>
                                {post.commentNumber}
                            </span>

                        </div>

                        <div className="col-3
                                        text-secondary">
                            <i className="bi
                                              bi-repeat
                                              text-secondary
                                              m-1"></i>
                            {post.retweetNumber}
                        </div>

                        <div className="col-3
                                        text-secondary">
                            <i className="bi
                                              bi-heart
                                              text-secondary
                                              m-1"></i>
                            {post.likeNumber}

                        </div>

                        <div className="col-3
                                        text-secondary">
                            <i className="bi
                                              bi-upload
                                              text-secondary
                                              m-1"></i>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row">

            </div>
        </li>
    )
};
export default PostItem;