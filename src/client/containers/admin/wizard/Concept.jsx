import React, {Component} from 'react'
export class Concept extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [
        {id: 1, name: "Apples"},
        {id: 2, name: "Pears"}
      ],
      suggestions: [
        {id: 3, name: "Bananas"},
        {id: 4, name: "Mangos"},
        {id: 5, name: "Lemons"},
        {id: 6, name: "Apricots"}
      ]
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
  }

  handleDelete(i) {
    let tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({tags})
  }

  handleAddition(tag) {
    let tags = this.state.tags.concat(tag)
    this.setState({tags})
  }

  componentDidMount() {
    var sampleTags = ['c++', 'java', 'php', 'coldfusion', 'javascript', 'asp', 'ruby', 'python', 'c', 'scala', 'groovy', 'haskell', 'perl', 'erlang', 'apl', 'cobol', 'go', 'lua'];
    $('#singleFieldTags').tagit({
      availableTags: sampleTags,
      singleField: true,
      singleFieldNode: $('#mySingleField')
    });

    // this.setState({ concepts: this.state.concepts.remove('java') })
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Add concept</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">Add concepts
              <br/>to improve the system's accurracy</p>
          </div>
        </div>

        <form>
          <ul id="singleFieldTags"></ul>
          <input type="submit" value="Submit"/>
        </form>


        <div className="col-sm-11 col-md-11">
          <button className="btn btn-alt"
                  onClick={this.props.previousStep}>Previous
          </button>
          <button className="btn btn-alt pull-right">Finish
          </button>
        </div>
      </div>
    )
  }
}
export default Concept;



