import React from 'react'
import Papa from 'papaparse';


class ImportData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parsedContent: null
    };
    this.setJson = this.setJson.bind(this);
  }

  getCSV(e) {
    this.setState({
      csv: e.target.files[0]
    }, () => {
      Papa.parse(this.state.csv, {
        complete: this.setJson
      });
    })
  }

  setJson(result) {
    console.log(result);
    this.setState({parsedContent: result.data})
  }

  render() {
    const { parsedContent } = this.state;
    return(
      <div>
        <input type="file" onChange={(e) => this.getCSV(e)}/>
        {
          parsedContent ?
              <div> {parsedContent} </div> :
              <div> No Data has been imported </div>
        }
      </div>
    )
  }

}

export default ImportData