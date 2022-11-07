import {createSlice} from "@reduxjs/toolkit";

const tuits = [
    {
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
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that's what being a spacefaring civilization is all about. It's about believing in the future and thinking that the future will be better than the past. And I can't think of anything more exciting than going out there and being among the stars."
    },

    { "_id": 345,
        "topic": "AI",
        "userName": "Tesla",
        "title": "100s of ",
        "time": "4d",
        "image": "tesla.png",
        "liked":  false,
        "replies":  234,
        "retuits":  543,
        "likes": 3456,
        "handle":  "@tesla",
        "tuit":  "Autopilot is an advanced driver assistance system that assists your car with steering, accelerating and braking for other vehicles and pedestrians within its lane. It assists with the most burdensome parts of driving and works alongside features like emergency braking, collision warning and blind-spot monitoring. With Full Self-Driving (FSD) capability, you will get access to a suite of more advanced driver assistance features, designed to provide more active guidance and assisted driving under your active supervision."},

    { "_id": 346,
        "topic": "Mars",
        "userName": "SpaceX",
        "title": "Tesla FSDr sleep",
        "time": "2g",
        "image": "spacex.png",
        "liked": true,
        "replies": 345,
        "retuits": 321,
        "likes": 1234,
        "handle": "@spacex",
        "tuit": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed. Cybertruck is built with an exterior shell made for ultimate durability  and passenger protection. Starting with a nearly impenetrable exoskeleton. every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection. Starting with a nearly impenetrable exoskeleton. every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skin to Tesla armor glass."
    } ]

const tuitStatSlice = createSlice({
    name: 'tuits',
    initialState: tuits,

    reducers: {
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
    unlikeTuit
} = tuitStatSlice.actions

export default tuitStatSlice.reducer;