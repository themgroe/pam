import { configureStore } from '@reduxjs/toolkit';
//  Adding slices to the store
import sprintReducer from './data/sprintSlice';
import projectReducer from './data/projectSlice';

export default configureStore({
    reducer: {
        sprints: sprintReducer,
        projects: projectReducer,
    },
})