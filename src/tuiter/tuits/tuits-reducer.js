import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json'

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitSlice = createSlice({
    name: 'tuits',
    initialState: tuits,

    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            state.splice(index,1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        likeTuit(state,action){
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = true;
            state[tuitIndex].likes += 1;
        },

        unlikeTuit(state,action){
            const tuitIndex = state.findIndex((tuit) => tuit._id === action.payload._id)
            state[tuitIndex].liked = false;
            state[tuitIndex].likes -= 1;
        }
    }
})

export const {
    likeTuit,
    unlikeTuit,
    createTuit,
    deleteTuit
} = tuitSlice.actions

export default tuitSlice.reducer;