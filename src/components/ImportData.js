import React from 'react';

//  Parsing module
import Papa from 'papaparse';

//  Redux Imports
import { connect } from 'react-redux';
import { set } from '../redux/data/sprintSlice';

// CSS
import '../assets/css/pam.css';

class ImportData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCSV: null,
      arrayCSV: []
    };
    this.setJson = this.setJson.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  // Function to obtain name of csv file / the target
  getCSV(e) {
    console.log(e.target.files[0])
    this.setState({
      selectedCSV: e.target.files[0]
    })
  }

  onHandleSubmit(e) {
    e.preventDefault();
    // Add csv to array
    let arr = this.state.arrayCSV;
    arr.push(this.state.selectedCSV);
    console.log("CSV array: ", arr)
    this.setState({arrayCSV: arr}, () => {
      // Call on Papa parse to extract the csv as a json callback to setJson() function
      Papa.parse(this.state.selectedCSV, {
        complete: this.setJson
      });
    });
  }

  setJson(result) {
    // obtain csv name and set sprint #
    let titleArray = this.state.selectedCSV.name.split(" ");
    let team = titleArray[0];
    let sprint = titleArray[4];
    let sprintObject = {
      name: team,
      sprint: sprint,
      issues: result.data
    }
    // this resets the file input (utilizes "ref" tag and the "file_input_file" id)
    this.fileInput.value = "";
    // call the SET action for sprints to add the uploaded sprint to the users data
    this.props.set(sprintObject);
  }

  render() {
    const { arrayCSV } = this.state;

    return(
      <div>
        <div className="form-group">
          <label htmlFor="formFile" className="form-label mt-4">Choose a CSV file for import</label>
          <div className="csv-input-group">
            <input id="fileInput" className="form-control" type="file" ref={ref=> this.fileInput = ref} onChange={(e) => this.getCSV(e)}/>
            <button type="button" className="btn btn-light" onClick={this.onHandleSubmit}>
              Submit
            </button>
          </div>
        </div>
        {
          arrayCSV ?
            <div>
                  {/* THIS BLOCK SHOULD BECOME A COMPONENT THAT WE PASS THE CSV ARRAY TO */}
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Type</th>
                      <th scope="col">Column heading</th>
                      <th scope="col">Column heading</th>
                      <th scope="col">Column heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arrayCSV.map(csv => (
                      <tr className="table-light">
                        <th scope="row">{csv.name}</th>
                        <td>View</td>
                        <td>Edit</td>
                        <td>Remove</td>
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
  sprints: state.sprints
});

const mapDispatchToProps = { set };

export default connect(mapStateToProps, mapDispatchToProps)(ImportData);