import React from 'react';

//  Redux Imports
import { connect } from 'react-redux';

import PAMLineGraph from '../../forms/PAMLineGraph';
// import PAMComposedChart from './forms/PAMComposedChart';

class Analytics extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            sprints: this.props.sprints,
            projects: this.props.projects
        }
    }

    render() {
        return(
            <div>
                {/* Header */}
                {
                    this.state.sprits ?
                    <div>{this.state.projects.selectedProject.name}</div> :
                    <div></div>
                }
                <PAMLineGraph data={this.state.sprints} />
                {/* PAMComposedChart needs a rework to display data properly based on the newly craft objects/reducer state */}
                {/* <PAMComposedChart data={this.state.sprints} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    sprints: state.sprints,
    projects: state.projects,
});

export default connect(mapStateToProps)(Analytics);