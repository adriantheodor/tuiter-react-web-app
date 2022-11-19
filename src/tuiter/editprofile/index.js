import React from "react";
import {useSelector} from "react-redux";


const EditProfile = () => {
    const currentUser = useSelector((state) => state.currentUser)
    return(
        <>
            <h4>Profile Screen</h4>
            <div className="row">
                <button className="btn col-2">
                    <i className="bi bi-arrow-left"></i>
                </button>
                <div className="col-10">
                    <div className="row fw-bolder">
                        {currentUser.firstName} {currentUser.lastName}
                    </div>
                    <div className="row text-secondary">
                        {currentUser.postCount} Tweets
                    </div>
                </div>
            </div>
            <div>
                <img className="float-end mt-2"
                     width={625}
                     height={250}
                     alt="banner"
                     src={`/images/${currentUser.bannerPicture}`}/>
            </div>
            <div>
                <img className="float-start pos-fixed rounded-circle mt-2"
                     width={200}
                     height={200}
                     alt="banner"
                     src={`/images/${currentUser.profilePicture}`}/>
                <button className="btn btn-outline-secondary float-end fw-bolder rounded-pill">
                    Edit profile
                </button>
            </div>
            <div className="row">
                <h4 className="row fw-bolder mt-2">
                    {currentUser.firstName} {currentUser.lastName}
                </h4>
                <h5 className="row text-secondary">
                    {currentUser.handle}
                </h5>
            </div>

            <div className="row">
                {currentUser.bio}
            </div>

            <div className="row">
                <div className="text-secondary  col-3 float-start">
                    <div className="">
                        <div className="">
                            <i className="bi bi-geo float-start me-2"></i>
                        </div>
                        {currentUser.location}
                    </div>
                </div>

                <div className="text-secondary col-3 float-start">
                    <div className="float-start">
                        <div className="float-start">
                            <i className="bi bi-balloon float-start me-2"></i>
                        </div>
                        Born {currentUser.dateOfBirth}
                    </div>
                </div>

                <div className="text-secondary col-3 float-start">
                    <div className="float-start">
                        <div className="float-start">
                            <i className="bi bi-calendar float-start me-2"></i>
                        </div>
                        Joined {currentUser.dateJoined}
                    </div>
                </div>

            </div>

            <div className="row">
                <span className="col-3">
                    <span className="float-start fw-bolder">{currentUser.followingCount}</span>
                <span className="text-secondary ms-1">Following</span>
                </span>


                <span className="col-3">
                    <span className="float-start fw-bolder">{currentUser.followersCount}</span>
                <span className="text-secondary ms-1">Followers</span>
                </span>
            </div>
        </>
    );
}
export default EditProfile;
