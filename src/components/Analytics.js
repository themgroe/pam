import React from 'react';

import PAMAreaGraph from './forms/PAMAreaGraph';
import PAMComposedChart from './forms/PAMComposedChart';

class Analytics extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            project : {
                name: "mcsrc",
                data: {
                    "sprint": 18,
                    "achieved": 2,
                    "planned": 3,
                    "issues": [
                        {
                            "title": "Create CI Job to archive master ISO on bin.grid",
                            "description": "After having a meeting with the Major and other people, we should create a way to store the iso after merging into master.",
                            "completedOn": "6/3/2021",
                            "points": 3
                        },
                        {
                            "title": "uProd - File cleanup cron job has a syntax error",
                            "description": "There were a few issues encountered during the attempt to upgrade MCSRC to version 1.0.2.10.0 in production.",
                            "completedOn": "6/4/2021",
                            "points": 3,
                        },
                        {
                            "title": "addTrustedHosts() doesn't get user input for hostIP",
                            "description": "We also need to fix the naming of the `f5IpAddress` from `f5IpAddresses`",
                            "completedOn": "6/9/2021",
                            "points": 5,
                        },
                        {
                            "title": "addTrustedHosts() doesn't get user input for hostIP",
                            "description": "We also need to fix the naming of the `f5IpAddress` from `f5IpAddresses`",
                            "completedOn": "6/14/2021",
                            "points": 2,
                        }
                    ]
                }
            }
        }
    }

    

    render() {
        return(
            <div>
                Analytics Page
                <PAMAreaGraph data={this.state.project.data} />
                <PAMComposedChart data={this.state.project.data} />
            </div>
        )
    }
}

export default Analytics;