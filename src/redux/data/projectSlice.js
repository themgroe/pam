import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
    name: 'project data',
    initialState: {
        data: [],
        selectedProject: null
    },
    reducers: {
        addSprintToProject: (state, action) => {
            // add a sprint UID to the project object (reference id)
            // loop through and find project name then add UID to that project
            let found = false;
            state.data.forEach(project => {
                if (project.name === action.payload.name) {
                    found=true;
                    if (!project.sprints.includes(action.payload.uid)) {
                        // New sprint - add uid to sprints array
                        project.sprints.push(action.payload.uid);
                    }
                };
            })
            
            if (!found) {
                // project doesnt exist, create it along with the passed data
                let projectObj = {};
                projectObj["name"] = action.payload.name;
                projectObj["sprints"] = [];
                projectObj["sprints"].push(action.payload.uid);
                state.data.push(projectObj);
            }
        },
        removeSprintFromProject: (state, action) => {
            // remove the sprint UID from the project object
        },
        deleteProject: (state, action) => {
            // remove the project object from the data array
        },
        selectProject: (state, action) => {
            // set a project that is selected for view in the analytics page
            state.data.forEach(project => {
                if (project.sprints.includes(action.payload)) {
                    state.selectedProject = project;
                }
            })
        }
    }
});

export const { addSprintToProject, removeSprintFromProject, deleteProject, selectProject } = projectSlice.actions;

export default projectSlice.reducer;