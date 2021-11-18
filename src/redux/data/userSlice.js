import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user data',
    initialState: {
        data: [],
        loggedIn: false
    },
    reducers: {
        login: (state, action) => {
            console.log("Log in!")
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;