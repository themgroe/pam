//  Redux Imports
import { connect } from 'react-redux';
import { removeSprint } from '../../../redux/data/sprintSlice';

const SprintItem = (props) => {
    return (
        <ul key={props.sprint.UID} className="list-group sprint-item">
            <li className="list-group-item d-flex justify-content-between align-items-center" style={{width: '100%'}}>
                <div className="sprint-item-info-wrapper">
                    <div className="sprint-item-label">
                        Sprint {props.sprint.Sprint}
                    </div>
                    <div className="sprint-item-time">
                        Date Added: <span style={{marginLeft: '5px'}}>{props.sprint.AddedOn}</span>
                    </div>
                    <div className="sprint-item-last-modified">
                        Last Modified: <span style={{marginLeft: '5px'}}>null</span>
                    </div>
                </div>
                <div className="sprint-item-actions">
                    <div onClick={() => props.viewModal(props.sprint.UID)} className="sprint-actions">View</div>
                    <div onClick={() => alert("This functionality has not beed implemented yet.")} className="sprint-actions">Edit</div>
                    <div onClick={() => props.removeSprint(props.sprint.UID)} className="sprint-actions">Remove</div>
                </div>
            </li>
        </ul>
    )
}

const mapStateToProps = (state) => ({
    sprints: state.sprints,
    projects: state.projects,
});

const mapDispatchToProps = { removeSprint };

export default connect(mapStateToProps, mapDispatchToProps)(SprintItem);