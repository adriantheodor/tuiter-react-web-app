import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <div className="border ps-3 pe-3 pt-3 pb-3">
            <div className="d-flex">
                <div>
                    <img src={`../../images/${tuit.image}`} alt="Avatar" className="wd-img-48px rounded-circle"/>
                </div>
            </div>

            <div className="ps-3 w-100">
                <div className="justify-content-between align-items-center d-flex w-100">
                    <div>
                        <span><strong>{tuit.username} </strong></span>
                        <i className="bi bi-check-circle-fill"></i>
                        <span>{tuit.handle}</span>
                        &middot;
                        <span> {tuit.time}</span>
                    </div>
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>

                </div>
                <div className="mb-2">
                    {tuit.tuit}
                </div>

                <div className="mb-2 align-items-center justify-content-between d-flex">
                    <div>
                        <span>
                            <i className="pe-2 bi bi-chat" aria-hidden="true"></i>
                            {tuit.replies}
                        </span>

                        <span>
                            <i className="pe-2 bi bi-arrow-down-up" aria-hidden="true"></i>
                            {tuit.retuits};
                        </span>

                        <span>
                            <i onClick={() => {
                                if(!tuit.liked) {
                                    dispatch(updateTuitThunk({
                                        disliked: false,
                                        ...tuit, liked: true, likes: tuit.likes + 1}))
                                }
                                else {
                                    dispatch(updateTuitThunk({
                                        ...tuit, liked: false, likes: tuit.likes - 1}))
                                }
                            }}
                               className={`bi pe-2 ${tuit.liked && "bi-heart-fill wd-color-red"} ${!tuit.liked && "bi-heart"}`} aria-hidden="true"></i>{tuit.likes}
                        </span>

                        <span>
                            <i onClick={() => {
                                if(!tuit.disliked) {
                                    dispatch(updateTuitThunk({
                                        liked: false,
                                        ...tuit, disliked: true, dislikes: tuit.dislikes + 1}))
                                }
                                else {
                                    dispatch(updateTuitThunk({
                                        ...tuit, disliked: false, dislikes: tuit.dislikes - 1}))
                                }

                            }}
                               className={`bi pe-2 ${tuit.disliked && "bi-hand-thumbs-down-fill"} ${!tuit.disliked && "bi-hand-thumbs-down"}`} aria-hidden="true"></i>{tuit.dislikes}
                        </span>

                        <span><i className="bi bi-share pe-2" aria-hidden="true"></i></span>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default TuitItem;