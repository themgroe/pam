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
        this.state = {
            data: null
        }
    }

    componentDidMount() {
        this.setState({data: [this.props.data]})
    }

    render()
    {
        if (this.state.data != null) {
            return(
                // <ResponsiveContainer height="100%" width="100%" className="RBG">
                    <ComposedChart width={200} height={350} data={this.state.data}>
                        <XAxis dataKey="achieved" />
                        <YAxis />
                        <Tooltip />
                        <Legend width={250} />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Bar dataKey="achieved" barSize={20} fill="#8884d8" />
                        <Bar dataKey="planned" barSize={20} fill="#82ca9d" name="point" />
                    </ComposedChart>
                // </ResponsiveContainer>
            )
        } else {
            return (<div>No data to show</div>)
        }
    }
}

export default PAMComposedChart;