import {createSlice} from "@reduxjs/toolkit";

import profile from "../data/profile.json"


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        editProfile(state, action) {
            Object.assign(state, action.payload);
        }
    }
})

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;