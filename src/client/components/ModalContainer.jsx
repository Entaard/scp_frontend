import React, { Component } from 'react'

export class ModalContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={`modal quick-view zoom ${this.props.showModal && 'in'}`}
           onClick={this.props.onClose}
           style={{
             display: this.props.showModal ? 'block' : 'none',
             background: "rgba(0, 0, 0, 0.5)"
           }}>
        <div className="modal-dialog"
             style={{
               width: 'auto',
               padding: '16px'
             }}
            onClick={event => event.stopPropagation()}>
          <div className="modal-header">
            <button type="button" className="close"
              onClick={this.props.onClose}>
              &#10006;
            </button>
          </div>
          <div className="modal-content">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

export default ModalContainer;
