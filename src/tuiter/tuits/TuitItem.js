import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {likeTuit} from "./tuits-reducer";
import {unlikeTuit} from "./tuits-reducer";
import {deleteTuit} from "./tuits-reducer";


const TuitItem = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists begin building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what " +
                "being a spacefaring civilization is all about. It's about believing in the future and thinking that " +
                "the future will be better than the past. And I can't think of anything more exciting than going out " +
                "there and being among the stars."
        }
    }
) => {
    const tuits = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit))
    }

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    const unlikeTuitHandler = (tuit) => {
        dispatch(unlikeTuit(tuit))
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto">
                    <img width={50}
                         className="rounded-circle float-end"
                         alt="profile"
                         src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10
                                ps-1
                                ">
                    <div className>
                        <i className="bi bi-x-lg ms-2 float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bolder">
                            {tuit.userName}
                            <i className="bi
                                      bi-patch-check-fill
                                      m-1
                                      wd-blue

                                      "></i>
                            <span className="text-secondary
                                             fw-normal">@{tuit.handle} · {tuit.time}</span>
                            <span className="float-end">
                                <i className="bi
                                              bi-three-dots
                                              text-secondary"></i>
                            </span>
                        </span>
                    </div>
                    <div className="row
                                    ms-1
                                    ">
                        <div className="row">{tuit.tuit}</div>

                        <div className="row">

                            <div className="col-3">

                                <i className="bi bi-chat me-2"></i>
                                {tuit.replies}
                            </div>

                            <div className="col-3">
                                <i className="bi bi-arrow-repeat me-2"></i>
                                {tuit.retuits}
                            </div>

                            <div className="col-3">
                                {
                                    !tuit.liked &&
                                    <button className="btn"
                                            onClick={() => likeTuitHandler(tuit)}>
                                        <i

                                            className="bi bi-heart float-start me-2">
                                        </i>

                                        <div className="float-end">{tuit.likes}</div>
                                    </button>

                                }

                                {
                                    tuit.liked &&
                                    <button className="btn btn-danger"
                                            onClick={() => unlikeTuitHandler(tuit)}>
                                    <i

                                        className="bi bi-heart float-start me-2">
                                    </i>

                                        <div className="float-end">{tuit.likes}</div>
                            </button>}



                            </div>

                            <div className="col-3">
                                <i className="bi bi-share"></i>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </li>
    );
};
export default TuitItem;