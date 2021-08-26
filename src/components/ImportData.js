import React from 'react';

// Necessary for routing on clicks / keeping history
import {withRouter} from 'react-router-dom'

//  Parsing module
import Papa from 'papaparse';

//  Redux Imports
import { connect } from 'react-redux';
import { add, remove, selectSprint } from '../redux/data/sprintSlice';
import { addSprintToProject, selectProject } from '../redux/data/projectSlice';

// CSS
import '../assets/css/pam.css';

class ImportData extends React.Component {
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

  removeCSV(uid) {
    this.props.remove(uid)
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
    this.props.add(sprintObject);
    // create the project if it doesnt exist and add the sprint to it.
    this.props.addSprintToProject(sprintObject);
  }

  goToPage(uid) {
    //  set selected sprint
    this.props.selectSprint(uid);
    //  set selected project
    this.props.selectProject(uid);
    //  change pages to analytics
    this.props.history.push("/analytics");
  }

  render() {
    const { sprints } = this.props;

    return(
      <div>
        <div className="form-group">
          <label htmlFor="formFile" className="form-label mt-4">Choose a CSV file for import</label>
          <div className="csv-input-group">
            <input id="fileInput" className="form-control" type="file" ref={ref=> this.fileInput = ref} onChange={(e) => this.getCSV(e)}/>
            <button id="submitCSVButton" type="button" className="btn btn-light" onClick={this.onHandleSubmit}>
              Submit
            </button>
          </div>
        </div>
        {
          sprints ?
            <div>
                  {/* THIS BLOCK SHOULD BECOME A COMPONENT THAT WE PASS THE CSV ARRAY TO */}
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Sprint</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sprints.data.map(sprint => (
                      <tr id={sprint.UID} key={sprint.UID} className="table-light">
                        <th scope="row">{sprint.Project}</th>
                        <th scope="row">{"Sprint " + sprint.Sprint}</th>
                        <td className="project-action-btns" >
                          <button type="button" className="btn btn-light" onClick={() => this.goToPage(sprint.UID) }>View</button>
                          <button type="button" className="btn btn-light" onClick={() => alert("this btn does nothing.")}>Edit</button>
                          <button type="button" className="btn btn-light" onClick={() => this.removeCSV(sprint.UID)}>Remove</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* END OF "SHOULD BE" COMPONENT SECTION */}
              </div> :
              <div> No Data has been imported </div>
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  sprints: state.sprints,
  projects: state.projects,
});

const mapDispatchToProps = { add, remove, selectSprint, addSprintToProject, selectProject };

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ImportData));