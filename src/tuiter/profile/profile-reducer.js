const initialState = {
    "firstName": "Jose", "lastName": "Annunziato", "handle": "@jannunzi", "profilePicture": "grimes-05.png", "bannerPicture": "launch.png",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    "website": "youtube.com/webdevtv",
    "location": "Boston, MA", "dateOfBirth": "7/7/1968", "dateJoined": "4/2009",
    "followingCount": 340, "followersCount": 223, postCount: 6114, editing: false}

const currentUserReducer = (state, action) => {
    return initialState
}

export default currentUserReducer;