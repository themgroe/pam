import { configureStore } from '@reduxjs/toolkit';
//  Adding slices to the store
import sprintReducer from './data/sprintSlice';

export default configureStore({
    reducer: {
        sprint: sprintDataReducer,
    },
})