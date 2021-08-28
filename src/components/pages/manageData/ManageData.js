import React from 'react';

//  Parsing module
import Papa from 'papaparse';

//  Redux Imports
import { connect } from 'react-redux';
import { addSprint, selectSprint } from '../../../redux/data/sprintSlice';
import { addSprintToProject, selectProject, getSprintProjects } from '../../../redux/data/projectSlice';

// Components
import SprintItem from './SprintItem';

// CSS
import '../../../assets/css/pam.css';

class ManageData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCSV: null,
      arrayCSV: [],
    };
    this.setJson = this.setJson.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  // Function to obtain name of csv file / the target
  getCSV(e) {
    this.setState({
      selectedCSV: e.target.files[0]
    })
  }

  onHandleSubmit(e) {
    e.preventDefault();
    // Call on Papa parse to extract the csv as a json callback to setJson() function
    Papa.parse(this.state.selectedCSV, {
      complete: this.setJson
    });
  }

  setJson(result) {
    // obtain csv name and set sprint #
    let titleArray = this.state.selectedCSV.name.split(" ");
    let team = titleArray[0];
    let sprint = titleArray[4];
    let sprintObject = {
      name: team,
      uid: team+sprint,
      sprint: sprint,
      issues: result.data
    }
    // this resets the file input (utilizes "ref" tag and the "file_input_file" id)
    this.fileInput.value = "";
    // call the SET action for sprints to add the uploaded sprint to the users data
    this.props.addSprint(sprintObject);
    // create the project if it doesnt exist and add the sprint to it.
    this.props.addSprintToProject(sprintObject);
    // select the project for the csv uploaded
    this.props.selectProject(team);
  }

  render() {
    const { sprints, projects } = this.props;

    return(
      <div className="manage-data-wrapper">
        {/* DIV BLOCK FOR THE SIDE BAR */}
        <div className="card text-white bg-secondary mb-3 manage-data-side-bar" style={{maxWidth: '20rem'}}>
          <div className="card-header">Project List</div>
          <div className="card-body">
            <div className="card-text manage-data-side-bar-project-list">
              {projects.data.map(project => 
                {
                  return projects.selectedProject === project ?
                  <div key={project["name"]} className="side-bar-project-name-selected" onClick={() => this.props.selectProject(project["name"])}>{project["name"]}</div> :
                  <div key={project["name"]} className="side-bar-project-name" onClick={() => this.props.selectProject(project["name"])}>{project["name"]}</div>
                })
              }
            </div>
          </div>
        </div>
        {/* END OF DIV BLOCK FOR SIDE BAR */}
        {/* START OF BLOCK CONTAINING IMPORT FORM AND SPRINT LIST FOR SELECTED PROJECT */}
        <div className="manage-data-main-group">
          {/* START OF BLOCK FOR THE IMPORT SPRINT FORM */}
          <div className="form-group">
            <label htmlFor="formFile" className="form-label mt-4">Choose a CSV file for import</label>
            <div className="csv-input-group">
              <input id="fileInput" className="form-control" type="file" ref={ref=> this.fileInput = ref} onChange={(e) => this.getCSV(e)}/>
              <button id="submitCSVButton" type="button" className="btn btn-light" onClick={this.onHandleSubmit}>
                Submit
              </button>
            </div>
          </div>
          {/* END OF BLOCK FOR THE IMPORT SPRINT FORM */}
          <hr className="manage-data-page-break" />
          {/* START OF BLOCK FOR THE LIST OF SPRINTS */}
          {
            projects.selectedProject ?
            <div style={{width: '85%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}> 
              <div>
                <span style={{opacity: '0.75'}}>Project Selected:</span> 
                <span style={{marginLeft: '10px', fontWeight: 'bold'}}>{projects.selectedProject.name}</span>
              </div>
              <div>
                <span style={{opacity: '0.75'}}>Total Items:</span>
                <span style={{marginLeft: '10px', fontWeight: 'bold'}}>{projects.selectedProject.sprints.length}</span>
              </div>
            </div> : null
          }
          {
            projects.selectedProject ?
              // A Project was selected - map the sprints to elements!
              sprints.data.map(sprint => {
                return projects.selectedProject.sprints.includes(sprint.UID) ?
                  <SprintItem 
                    sprint={sprint}
                  />
                  : null
              })
            : null
          }
          {/* END OF BLOCK FOR THE LIST OF SPRINTS */}
        </div>
        {/* END OF BLOCK CONTAINING IMPORT FORM AND SPRINT LIST FOR SELECTED PROJECT */}
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  sprints: state.sprints,
  projects: state.projects,
});

const mapDispatchToProps = { addSprint, selectSprint, addSprintToProject, selectProject, getSprintProjects };

export default connect(mapStateToProps, mapDispatchToProps)(ManageData);