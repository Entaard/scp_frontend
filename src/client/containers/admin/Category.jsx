import React, {Component} from 'react'
// import {createAction} from '../../utils/SagaUtils'
import {connect} from 'react-redux'
export class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: null,
    }
  }

  toggleEditing(itemId) {
    this.setState({editing: itemId});
  }

  renderNameOrEditField(item) {
    if (this.state.editing === item.id) {
      return (
        <td>
          <input className="form-control table-input"
                 placeholder="Category name"
                 defaultValue={item.name}
                 type="text"/>
          <a><i className="icon-check"></i></a>
          <a><i className="icon-close-1" onClick={() => this.toggleEditing(null) }></i></a>
        </td>
      )
    } else {
      return (
        <td><code>{item.name}</code></td>
      )
    }
  }

  renderRow() {
    return this.props.categories.map((item, index) => (
      <tr key={item.id}>
        <td>{index + 1}</td>
        {this.renderNameOrEditField(item)}
        <td>
          <a className="btn btn-alt"
             onClick={() => this.toggleEditing(item.id) }>Edit</a>
          <a style={{marginLeft: '20px'}}
             className="btn">Delete</a>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Category</h1>
          </div>
        </div>
        <div className="col-lg-8 no-padding">
          <form className="white">
            <div className="sideblock two-third">
              <h2>New category</h2>
              <input className="form-control input-inline"
                     placeholder="Category name"
                     type="text"/>
              <a className="btn btn-alt pull-right">Add</a>
            </div>
          </form>
        </div>

        <table className="table table-bordered">
          <tbody>
          <tr>
            <th className="col-md-2" scope="col">No.</th>
            <th className="col-md-6" scope="col">Name</th>
            <th className="col-md-4" scope="col">Acion</th>
          </tr>
          {this.renderRow()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.data,
})

export default connect(mapStateToProps)(Category);
