import { createSlice } from '@reduxjs/toolkit';

export const sprintSlice = createSlice({
    name: 'sprint data',
    initialState: {
        data: []
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
                            console.log(data)
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
            console.log("Remove action triggered (pre-state): ", state.data);
            let sprintIndex = 0;
            state.data.forEach((sprint, index) => {
                if (sprint.UID === action.payload) {
                    console.log(`Sprint ${action.payload} found.`);
                    sprintIndex=index;
                }
            });
            let array = state.data;
            array.splice(sprintIndex, 1);
            console.log("Resultant data after removal: ", array)
        }
    }
})

export const { add, remove } = sprintSlice.actions;

export default sprintSlice.reducer;