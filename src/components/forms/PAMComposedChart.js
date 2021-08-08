import React from 'react';

import {
    // ResponsiveContainer, 
    ComposedChart, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Bar, 
    Tooltip, 
    Legend
} from 'recharts';

class PAMComposedChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
    }

    render()
    {
        console.log(this.props.data.selectedCSV)
        if (this.props.data.selectedCSV) {
            return(
                // <ResponsiveContainer height="100%" width="100%" className="RBG">
                    <ComposedChart width={200} height={350} data={this.props.data.selectedCSV}>
                        <XAxis dataKey="PointsAchieved" />
                        <YAxis />
                        <Tooltip />
                        <Legend width={250} />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="PointsAchieved" barSize={50} fill="#8884d8" />
                        <Bar dataKey="IssuesCompleted" barSize={50} fill="#82ca9d" />
                    </ComposedChart>
                // </ResponsiveContainer>
            )
        } else {
            return (<div>No data to show</div>)
        }
    }
}

export default PAMComposedChart;