import { configureStore } from '@reduxjs/toolkit';
//  Adding slices to the store
import userReducer from './data/userSlice';
import sprintReducer from './data/sprintSlice';
import projectReducer from './data/projectSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        sprints: sprintReducer,
        projects: projectReducer,
    },
})