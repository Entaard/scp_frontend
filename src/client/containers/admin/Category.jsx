import React, {Component} from 'react'
import {createAction} from '../../utils/SagaUtils'
import {CREATE_CATEGORY, UPDATE_CATEGORY, GET_CATEGORIES} from '../../actions/CategoryAction'
import CategoryForm from '../../components/admin/CategoryForm'
import {connect} from 'react-redux'
import {reset} from 'redux-form';

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

  handleUpdate() {
    this.toggleEditing(null)
  }

  handleInputChange(event) {
    const {id, value} = event.target
    this.setState({[id]: value})
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
    const self = this
    this.props.createCategory(values)
      .then(() => {
        self.props.getCategories()
        self.props.resetForm()
      })
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Category</h1>
          </div>
        </div>
        <div className="col-md-6 col-md-offset-4 no-padding">
          <CategoryForm onSubmit={this.handleSubmit}/>
        </div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2 no-padding">
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
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.data,
})

const mapDispatchToProps = (dispatch) => ({
  getCategories: createAction(GET_CATEGORIES, dispatch),
  createCategory: createAction(CREATE_CATEGORY, dispatch),
  updateCategory: createAction(UPDATE_CATEGORY, dispatch),
  resetForm: () => dispatch(reset('category'))
})

export default connect(mapStateToProps, mapDispatchToProps)(Category);
