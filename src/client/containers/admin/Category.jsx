import React, {Component} from 'react'
import {createAction} from '../../utils/SagaUtils'
import {CREATE_CATEGORY, UPDATE_CATEGORY} from '../../actions/CategoryAction'
import CategoryForm from '../../components/admin/CategoryForm'
import {connect} from 'react-redux'
export class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: null,
      category: '',
    }
  }

  toggleEditing(itemId) {
    this.setState({editing: itemId});
  }

  handleUpdate(id) {
    this.toggleEditing(null)
    console.log(id, this.state.category)
  }

  handleInputChange(event) {
    this.setState({[event.target.id]: event.target.value})
  }

  renderNameOrEditField(item) {
    if (this.state.editing === item.id) {
      return (
        <td>
          <input id="category"
                 className="form-control table-input"
                 placeholder="Category name"
                 defaultValue={item.name}
                 onChange={this.handleInputChange.bind(this)}
                 type="text"/>
          <a><i className="icon-check"
                onClick={() => this.handleUpdate(item.id)}></i></a>
          <a><i className="icon-close-1"
                onClick={() => this.toggleEditing(null) }></i></a>
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
          {/*<a style={{marginLeft: '20px'}}*/}
             {/*className="btn">Delete</a>*/}
        </td>
      </tr>
    ))
  }

  handleSubmit = (values) => {
    this.props.createCategory(values)
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
          <CategoryForm onSubmit={this.handleSubmit}/>
        </div>

        <table className="table table-bordered">
          <tbody>
          <tr>
            <th className="col-md-1"
                scope="col">No.
            </th>
            <th className="col-md-9"
                scope="col">Name
            </th>
            <th className="col-md-2"
                scope="col">Acion
            </th>
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

const mapDispatchToProps = (dispatch) => ({
  createCategory: createAction(CREATE_CATEGORY, dispatch),
  updateCategory: createAction(UPDATE_CATEGORY, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);
