import React, {Component} from 'react'
import {createAction} from '../../utils/SagaUtils'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import {
  GET_LOGS,
} from '../../actions/LogAction'

export class Log extends Component {
  componentDidMount() {
    this.props.getLogs()
  }

  renderRows() {
    return this.props.logs.map((log, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td><code>{log.url}</code></td>
        <td>{log.created_at}</td>
        <td>
          <input type="checkbox" disabled="true" checked={log.finish && 'checked'}/>
        </td>
        <td>
          {!log.finish && <Link to={{pathname: "/admin/upload", query: {logId: log.id}}}
                               className="btn btn-sm btn-ctn">
            <span>Start training</span>
          </Link>}

        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Logs</h1>
          </div>
        </div>
        <table className="table table-bordered">
          <tbody>
          <tr>
            <th className="col-md-1"
                scope="col">No.
            </th>
            <th className="col-md-4"
                scope="col">Product name
            </th>
            <th className="col-md-2"
                scope="col">Created date
            </th>
            <th className="col-md-1"
                scope="col">Finished
            </th>
            <th className="col-md-2"
                scope="col">Action
            </th>
          </tr>
          {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  logs: state.logs,
})

const mapDispatchToProps = (dispatch) => ({
  getLogs: createAction(GET_LOGS, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Log);
