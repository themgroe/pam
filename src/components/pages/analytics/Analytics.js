import React from 'react';

//  Redux Imports
import { connect } from 'react-redux';

class Analytics extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            user: this.props.user,
            sprints: this.props.sprints,
            projects: this.props.projects
        }
    }

    render() {
        return(
            <div>
                {/* Header */}
                {
                    this.state.projects.selectedProject ?
                    <div>{this.state.projects.selectedProject.name}</div> :
                    <div>No Project / Sprint selected</div>
                }
                {/* PAM Visuals need a rework to display data properly based on the newly craft objects/reducer state */}
                {/* <PAMLineGraph data={this.state.sprints} /> */}
                {/* <PAMComposedChart data={this.state.sprints} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    sprints: state.sprints,
    projects: state.projects,
});

export default connect(mapStateToProps)(Analytics);