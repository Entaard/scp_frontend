import React, {Component} from 'react'
import {createAction} from '../../utils/SagaUtils'
export class Log extends Component {
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
            <th className="col-md-2"
                scope="col">Product name
            </th>
            <th className="col-md-4"
                scope="col">Message
            </th>
            <th className="col-md-2"
                scope="col">Created date
            </th>
            <th className="col-md-1"
                scope="col">User Id
            </th>
          </tr>
          <tr>
            <td>1</td>
            <td>Product name</td>
            <td>My name is Barry Allen and I am the fastest man alive</td>
            <td>14/02/2016</td>
            <td><code>239</code></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Log;
