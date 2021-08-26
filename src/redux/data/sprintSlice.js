import { createSlice } from '@reduxjs/toolkit';

export const sprintSlice = createSlice({
    name: 'sprint data',
    initialState: {
        data: [],
        selectedCSV: null
    },
    reducers: {
        add: (state, action) => {
            /*
            * ADD method
            *     saving the passed sprint data into the redux store
            **/
            let sprintObject = {};
            let pointsAchieved = 0;
            let issueArray = [];
            let issueAttributes = [];
            let arraySize = action.payload.issues.length;
            action.payload.issues.forEach((issue, index) => {
                //  if this is the first row in the array, then we need to extract the object data from it.
                if (index === 0) {
                    // iterate through the issue array (this contains the titles of each column)
                    issue.forEach((attribute) => {
                        //  push to attributes (i.e. the titles of each column of data) array
                        issueAttributes.push(attribute);
                    });
                    // We have to stop at Array - 1 since the csv's generated have excess at the end.
                } else if (index < arraySize-1) {
                    // Instantiate issueObject that contains all data pertanent to an issue (i.e. title, description.. etc)
                    let issueObject = {};
                    issue.forEach((data, index) => {
                        let objectAttribute = issueAttributes[index]
                        issueObject[objectAttribute] = data;
                        if (objectAttribute === "Story Points") {
                            pointsAchieved += parseInt(data);
                        }
                    });
                    issueArray.push(issueObject);
                }
            });
            // Create Sprint Object - (i.e. Name of Project, Sprint #, Issues Completed, Points Achieved)
            sprintObject['Project'] = action.payload.name;
            sprintObject['Sprint'] = action.payload.sprint;
            sprintObject['Issues'] = [...issueArray];
            sprintObject['IssuesCompleted'] = issueArray.length;
            sprintObject['PointsAchieved'] = pointsAchieved;

            // Creating node Unique Identifier
            sprintObject['UID'] = sprintObject['Project'] + sprintObject['Sprint'];

            // Add the previous data to the array before adding the new one.
            let data = state.data
            data.push(sprintObject)

            // Set the new state data
            state.data = data;
        },
        remove: (state, action) => {
            // variable to hold the "found at" value
            let sprintIndex = 0;
            // forEach to loop through array 
            console.log("Sprint: ", state.data)
            state.data.forEach((sprint, index) => {
                // IF statement to check to see if the UID's match
                if (sprint.UID === action.payload) {
                    // set the variable to the "found at" value
                    sprintIndex=index;
                    // check to see if selected is not null
                    if (state.selectedCSV != null) {
                        // check to see if the sprint.UID matches the selectedCSV
                        if (state.selectedCSV.UID === action.payload) {
                            state.selectedCSV = null;
                        }
                    }
                }
            });
            // remove the sprint at the index from states.data
            state.data.splice(sprintIndex, 1);
        },
        selectSprint: (state, action) => {
            state.data.forEach(sprint => {
                if (sprint.UID === action.payload) {
                    state.selectedCSV = sprint;
                }
            })
        }
    }
})

export const { add, remove, selectSprint } = sprintSlice.actions;

export default sprintSlice.reducer;