import React from 'react';

import {
    // ResponsiveContainer, 
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend
} from 'recharts';

class PAMLineGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setState({data: this.props.data})
    }

    render() {
        if(this.state.data != null) {
            return(
                // <ResponsiveContainer height="100%" width="100%">
                    <LineChart width={750} height={350} data={this.state.data.issues.slice()}
                        margin={{ top: 10, right: 55, left: 0, bottom: 10 }}>
                        <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                        </linearGradient>
                        </defs>
                        <XAxis dataKey="completedOn" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} width={750}/>
                        <Line type="monotone" dataKey="points" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" name="Points By Date" />
                    </LineChart>
                // </ResponsiveContainer>
            )
        } else {
            return(
                <div>No data to show</div>
            )
        }
    }
}

export default PAMLineGraph;