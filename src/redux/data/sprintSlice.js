import { createSlice } from '@reduxjs/toolkit';

export const sprintSlice = createSlice({
    name: 'sprint data',
    initialState: {
        sprint: null
    },
    reducers: {
        set: (state, action) => {
            /*
            * SET method
            *     saving the passed sprint data into the redux store
            **/
           state.sprint = action.payload;
        }
    }
})

export const { set } = sprintSlice.actions;

export default sprintSlice.reducer;