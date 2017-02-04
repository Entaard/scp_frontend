import React, {Component} from 'react'

const colors =['FF850A', 'D2524E', '333745', '1C90F3']
export class Option extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: '',
      color: '',
      quantity: 0,
    }
  }

  renderColorBoxes() {
    return colors.map(item => (
      <li key={item}>
        <a><div className="color-box" style={{backgroundColor: `#${item}`}}></div></a>
      </li>
    ))
  }

  render() {
    return (
      <div className="container">
        <div className="page-title">
          <div className="title center">
            <h1>Product Option</h1>
          </div>
          <div className="text-wrapper">
            <p className="text-center">
              <br/>Add all options for the product here</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-push-2">
            <div className="product-info-block creative">
              <div className="product-options more-options">
                <div className="product-size swatches"><span className="option-label">Size:</span>
                  {/*<div className="select-wrapper-sm">*/}
                    {/*<select className="form-control input-sm size-variants">*/}
                      {/*<option value="S">S</option>*/}
                      {/*<option value="M"*/}
                              {/*selected>M*/}
                      {/*</option>*/}
                      {/*<option value="L">L</option>*/}
                      {/*<option value="XL">XL</option>*/}
                    {/*</select>*/}
                  {/*</div>*/}
                  <ul className="size-list">
                    <li><a href="#"
                           data-value='S'><span className="value">S</span></a></li>
                    <li><a href="#"
                           data-value='M'><span className="value">M</span></a></li>
                    <li><a href="#"
                           data-value='L'><span className="value">L</span></a></li>
                    <li><a href="#"
                           data-value='XL'><span className="value">XL</span></a></li>
                  </ul>
                </div>
                <div className="product-color swatches"><span className="option-label">Color:</span>
                  {/*<div className="select-wrapper-sm">*/}
                    {/*<select className="form-control input-sm">*/}
                      {/*<option value="Red">Red</option>*/}
                      {/*<option value="Pink">Pink</option>*/}
                      {/*<option value="Marine"*/}
                              {/*selected>Marine*/}
                      {/*</option>*/}
                      {/*<option value="Orange">Orange</option>*/}
                    {/*</select>*/}
                  {/*</div>*/}
                  <ul className="color-list">
                    {this.renderColorBoxes()}
                  </ul>
                </div>
              </div>
              <div className="product-qty"><span className="option-label">Quantity:</span>
                <div className="qty qty-changer">
                  <fieldset>
                    <input type="button"
                           value="&#8210;"
                           className="decrease"/>
                    <input type="number"
                           className="qty-input"/>
                    <input type="button"
                           value="+"
                           className="increase"/></fieldset>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="product-actions">
                <div className="actions">
                  <button className="btn btn-loading">Add</button>
                  <a href="#"
                     className="btn product-details"><i className="icon icon-external-link"></i></a></div>
              </div>
            </div>
          </div>

          {/*<div className="cart-table">*/}
            {/*<div className="table-header">*/}
              {/*<div className="price">*/}
                {/*Size*/}
              {/*</div>*/}
              {/*<div className="qty">*/}
                {/*Quantity*/}
              {/*</div>*/}
              {/*<div className="subtotal">*/}
                {/*Color*/}
              {/*</div>*/}
              {/*<div className="remove">*/}
                {/*<span className="hidden-sm hidden-xs">Remove</span>*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="table-row">*/}
              {/*<div className="price">*/}
                {/*42*/}
              {/*</div>*/}
              {/*<div className="qty qty-changer">*/}
                {/*<input type="text"*/}
                       {/*className="qty-input"*/}
                       {/*value="2"/>*/}
              {/*</div>*/}
              {/*<div className="subtotal">*/}
                {/*<img src="/images/colorswatch/color-red.png"*/}
                     {/*alt=""/>*/}
              {/*</div>*/}
              {/*<div className="remove">*/}
                {/*<a className="icon icon-close-1"></a>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}

          <div className="col-sm-11 col-md-11">
            <button onClick={this.props.previousStep} className="btn btn-alt">Previous</button>
            <button onClick={this.props.finish} className="btn btn-alt pull-right">Finish</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Option;

