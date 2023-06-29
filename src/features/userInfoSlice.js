import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  movies: [],
  tvShows: [],
  Upcoming: [],
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        addToMovieList: (state, action)=>{
            const movie = action.payload
            state.movies.push(movie)
        }
    }
})