import React, {Component} from 'react'
import Product from './Product'


const items = [
  {id: 1, image: '', name: 'Some shirt 1', price: 100},
  {id: 2, image: '', name: 'Some shirt 2', price: 100},
  {id: 3, image: '', name: 'Some shirt 3', price: 100},
  {id: 4, image: '', name: 'Some shirt 4', price: 123},
]
export class ProductDetail extends Component {

  renderProductItem() {
    return (
        items.map((item, index) => (
            <Product
                key={item.id}
                name={item.name}
                price={item.price}
            />
        ))
    )
  }

  render() {
    return (
        <div className="page-main">
          <div className="block">
            <div className="container">
              <ul className="breadcrumbs">
                <li><a href="index.html"><i className="icon icon-home"></i></a></li>
                <li>/<a href="#">Women</a></li>
                <li>/<span>Black swimsuit with bindings</span></li>
                <li className="product-nav">
                  <i className="icon icon-angle-left"></i><a href="#"
                                                             className="product-nav-prev">prev product
                  <span className="product-nav-preview">
										<span className="image"><img src="images/products/product-prev-preview.jpg"
                                                 alt=""/><span className="price">$280</span></span>
										<span className="name">Black swimsuit</span>
									</span></a>/
                  <a href="#"
                     className="product-nav-next">next product
                    <span className="product-nav-preview">
										<span className="image"><img src="images/products/product-next-preview.jpg"
                                                 alt=""/><span className="price">$280</span></span>
										<span className="name">Black swimsuit</span>
									</span></a><i className="icon icon-angle-right"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="block product-block">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-4 col-lg-4">

                  <div className="main-image">
                    <img src="images/products/large/product-gallery-1.jpg"
                         className="zoom"
                         alt=""
                         data-zoom-image="images/products/large/product-gallery-1.jpg"/>
                    <div className="dblclick-text"><span>Double click for enlarge</span></div>
                    <a href="http:.youtube.com/watch?v=qZeeMm35LXo"
                       className="video-link"><i className="icon icon-film"></i></a>
                    <a href="images/products/large/product-gallery-1.jpg"
                       className="zoom-link"><i className="icon icon-zoomin"></i></a>
                  </div>
                  <div className="product-previews-wrapper">
                    <div className="product-previews-carousel"
                         id="previewsGallery">
                      <a href="#"
                         data-image="images/products/large/product-gallery-1.jpg"
                         data-zoom-image="images/products/large/product-gallery-1.jpg"><img src="images/products/product-gallery-1.jpg"
                                                                                            alt=""/></a>
                      <a href="#"
                         data-image="images/products/large/product-gallery-2.jpg"
                         data-zoom-image="images/products/large/product-gallery-2.jpg"><img src="images/products/product-gallery-2.jpg"
                                                                                            alt=""/></a>
                      <a href="#"
                         data-image="images/products/large/product-gallery-3.jpg"
                         data-zoom-image="images/products/large/product-gallery-3.jpg"><img src="images/products/product-gallery-3.jpg"
                                                                                            alt=""/></a>

                    </div>
                  </div>

                </div>
                <div className="col-sm-6 col-md-8 col-lg-5">
                  <div className="product-info-block classic">
                    <div className="product-info-top">
                      <div className="product-sku">SKU: <span>Stock Keeping Unit</span></div>
                      <div className="rating">
                        <i className="icon icon-star fill"></i><i className="icon icon-star fill"></i><i className="icon icon-star fill"></i><i className="icon icon-star fill"></i><i className="icon icon-star"></i><span className="count">248 reviews</span>
                      </div>
                    </div>
                    <div className="product-name-wrapper">
                      <h1 className="product-name">Cover up tunic</h1>
                      <div className="product-labels">
                        <span className="product-label sale">SALE</span>
                        <span className="product-label new">NEW</span>
                      </div>
                    </div>
                    <div className="product-availability">Availability: <span>In stock</span></div>
                    <div className="product-description">
                      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia nonkdni numquam eius modi tempora incidunt ut labore </p>
                    </div>
                    <div className="countdown-circle hidden-xs">
                      <div className="countdown-wrapper">
                        <div className="countdown"
                             data-promoperiod="0"></div>
                        <div className="countdown-text">
                          <div className="text1">Discount 45% OFF</div>
                          <div className="text2">Hurry, there are only <span>14</span> item(s) left!</div>
                        </div>
                      </div>
                    </div>
                    <div className="product-options">
                      <div className="product-size swatches">
                        <span className="option-label">Size:</span>
                        <div className="select-wrapper-sm">
                          <select className="form-control input-sm size-variants">
                            <option value="36">36 - $114.00 USD</option>
                            <option value="38"
                                    selected>38 - $114.00 USD
                            </option>
                            <option value="40">40 - $114.00 USD</option>
                            <option value="42">42 - $114.00 USD</option>
                          </select>
                        </div>
                        <ul className="size-list">
                          <li className="absent-option"><a href="#"
                                                           data-value='36'><span className="value">36</span></a></li>
                          <li><a href="#"
                                 data-value='38'><span className="value">38</span></a></li>
                          <li><a href="#"
                                 data-value='40'><span className="value">40</span></a></li>
                          <li><a href="#"
                                 data-value='42'><span className="value">42</span></a></li>
                        </ul>
                      </div>
                      <div className="product-color swatches">
                        <span className="option-label">Color:</span>
                        <div className="select-wrapper-sm">
                          <select className="form-control input-sm">
                            <option value="Red">Red</option>
                            <option value="Green">Green</option>
                            <option value="Blue"
                                    selected>Blue
                            </option>
                            <option value="Yellow">Yellow</option>
                            <option value="Grey">Grey</option>
                            <option value="Violet">Violet</option>
                          </select>
                        </div>
                        <ul className="color-list">
                          <li className="absent-option"><a href="#"
                                                           data-toggle="tooltip"
                                                           data-placement="top"
                                                           title="Red"
                                                           data-value="Red"
                                                           data-image="images/products/product-color-red.jpg"><span className="value"><img src="images/colorswatch/color-red.png"
                                                                                                                                           alt=""/></span></a>
                          </li>
                          <li><a href="#"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title="Pink"
                                 data-value="Green"
                                 data-image="images/products/product-color-green.jpg"><span className="value"><img src="images/colorswatch/color-green.png"
                                                                                                                   alt=""/></span></a>
                          </li>
                          <li><a href="#"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title="Marine"
                                 data-value="Blue"
                                 data-image="images/products/product-color-blue.jpg"><span className="value"><img src="images/colorswatch/color-blue.png"
                                                                                                                  alt=""/></span></a>
                          </li>
                          <li><a href="#"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title="Orange"
                                 data-value="yellow"
                                 data-image="images/products/product-color-yellow.jpg"><span className="value"><img src="images/colorswatch/color-yellow.png"
                                                                                                                    alt=""/></span></a>
                          </li>
                          <li><a href="#"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title="Orange"
                                 data-value="grey"
                                 data-image="images/products/product-color-grey.jpg"><span className="value"><img src="images/colorswatch/color-grey.png"
                                                                                                                  alt=""/></span></a>
                          </li>
                          <li><a href="#"
                                 data-toggle="tooltip"
                                 data-placement="top"
                                 title="Orange"
                                 data-value="grey"
                                 data-image="images/products/product-color-violet.jpg"><span className="value"><img src="images/colorswatch/color-violet.png"
                                                                                                                    alt=""/></span></a>
                          </li>
                        </ul>
                      </div>
                      <div className="product-qty">
                        <span className="option-label">Qty:</span>
                        <div className="qty qty-changer">
                          <fieldset>
                            <input type="button"
                                   value="&#8210;"
                                   className="decrease"/>
                            <input type="text"
                                   className="qty-input"
                                   value="2"
                                   data-min="0"/>
                            <input type="button"
                                   value="+"
                                   className="increase"/>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                    <div className="product-actions">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="product-meta">
                            <span><a href="#"><i className="icon icon-heart"></i> Add to wishlist</a></span>
                            <span><a href="#"><i className="icon icon-balance"></i> Add to Compare</a></span>
                          </div>
                          <div className="social">
                            <div className="share-button toLeft">
                              <span className="toggle">Share</span>
                              <ul className="social-list">
                                <li>
                                  <a href="#"
                                     className="icon icon-google google"></a>
                                </li>
                                <li>
                                  <a href="#"
                                     className="icon icon-fancy fancy"></a>
                                </li>
                                <li>
                                  <a href="#"
                                     className="icon icon-pinterest pinterest"></a>
                                </li>
                                <li>
                                  <a href="#"
                                     className="icon icon-twitter-logo twitter"></a>
                                </li>
                                <li>
                                  <a href="#"
                                     className="icon icon-facebook-logo facebook"></a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="price">
                            <span className="old-price"><span>$140.00</span></span>
                            <span className="special-price"><span>$114.00</span></span>
                          </div>
                          <div className="actions">
                            <button data-loading-text='<i className="icon icon-spinner spin"></i><span>Add to cart</span>'
                                    className="btn btn-lg btn-loading"><i className="icon icon-cart"></i><span>Add to cart</span>
                            </button>
                            <a href="#"
                               className="btn btn-lg product-details"><i className="icon icon-external-link"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="tabaccordion">
              <div className="container">

                <ul className="nav-tabs product-tab"
                    role="tablist">
                  <li><a href="#Tab1"
                         role="tab"
                         data-toggle="tab">Description</a></li>
                  <li><a href="#Tab4"
                         role="tab"
                         data-toggle="tab">Tags</a></li>
                  <li><a href="#Tab5"
                         role="tab"
                         data-toggle="tab">Reviews</a></li>
                </ul>

                <div className="tab-content">
                  <div role="tabpanel"
                       className="tab-pane"
                       id="Tab1">
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                      born and I will give you a complete account of the system, and expound the actual teachings of the
                      great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                      avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are extremely painful</p>
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <tbody>
                        <tr>
                          <td><strong>PROOF</strong></td>
                          <td>PDF Proof</td>
                        </tr>
                        <tr>
                          <td><strong>SAMPLES</strong></td>
                          <td>Digital, Printed</td>
                        </tr>
                        <tr>
                          <td><strong>WRAPPING</strong></td>
                          <td>Yes, No</td>
                        </tr>
                        <tr>
                          <td><strong>UV GLOSS COATING</strong></td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td><strong>SHRINK WRAPPING</strong></td>
                          <td>No Shrink Wrapping, Shrink in 25s, Shrink in 50s, Shrink in 100s</td>
                        </tr>
                        <tr>
                          <td><strong>WEIGHT</strong></td>
                          <td>0.05, 0.06, 0.07ess cards</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div role="tabpanel"
                       className="tab-pane"
                       id="Tab4">
                    <ul className="tags">
                      <li><a href="#"><span className="value"><span>Dresses</span></span></a></li>
                      <li><a href="#"><span className="value"><span>Outerwear</span></span></a></li>
                      <li><a href="#"><span className="value"><span>Tops</span></span></a></li>
                      <li><a href="#"><span className="value"><span>Sleeveless tops</span></span></a></li>
                      <li><a href="#"><span className="value"><span>Sweaters</span></span></a></li>
                    </ul>
                    <div className="divider"></div>
                    <h3>Add your tag</h3>
                    <form className="contact-form white"
                          action="#">
                      <label>Tag<span className="required">*</span></label>
                      <input className="form-control input-lg"/>
                      <div>
                        <button className="btn btn-lg">Submit Tag</button>
                      </div>
                      <div className="required-text">* Required Fields</div>
                    </form>
                  </div>
                  <div role="tabpanel"
                       className="tab-pane"
                       id="Tab5">
                    <div className="table-responsive">
                      <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                          <td></td>
                          <td className="text-center">1 star</td>
                          <td className="text-center">2 star</td>
                          <td className="text-center">3 star</td>
                          <td className="text-center">4 star</td>
                          <td className="text-center">5 star</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td><strong>Price</strong></td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-price1"
                                     type="radio"
                                     name="vote-price"
                                     value="1"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-price2"
                                     type="radio"
                                     name="vote-price"
                                     value="2"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-price3"
                                     type="radio"
                                     name="vote-price"
                                     value="3"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-price4"
                                     type="radio"
                                     name="vote-price"
                                     value="4"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-price5"
                                     type="radio"
                                     name="vote-price"
                                     value="5"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Value</strong></td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-value1"
                                     type="radio"
                                     name="vote-value"
                                     value="1"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-value2"
                                     type="radio"
                                     name="vote-value"
                                     value="2"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-value3"
                                     type="radio"
                                     name="vote-value"
                                     value="3"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-value4"
                                     type="radio"
                                     name="vote-value"
                                     value="4"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-value5"
                                     type="radio"
                                     name="vote-value"
                                     value="5"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Quality</strong></td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-quality1"
                                     type="radio"
                                     name="vote-quality"
                                     value="1"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-quality2"
                                     type="radio"
                                     name="vote-quality"
                                     value="2"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-quality3"
                                     type="radio"
                                     name="vote-quality"
                                     value="3"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-quality4"
                                     type="radio"
                                     name="vote-quality"
                                     value="4"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                          <td className="text-center">
                            <label className="radio">
                              <input id="vote-quality5"
                                     type="radio"
                                     name="vote-quality"
                                     value="5"/><span className="outer"><span className="inner"></span></span>
                            </label>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <h3>Add new review</h3>
                    <form className="contact-form white"
                          action="#">
                      <label>Review<span className="required">*</span></label>
                      <textarea className="form-control input-lg"></textarea>
                      <div>
                        <button className="btn btn-lg">Submit Review</button>
                      </div>
                      <div className="required-text">* Required Fields</div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block"
               style={{overflow: 'hidden', height: '650px'}}>
            <div className="container">
              <div className="row">

                <div className="col-md-12">

                  <div className="title">
                    <h2 className="custom-color">Deal of the day</h2>
                    <div className="toggle-arrow"></div>
                    <div className="carousel-arrows"></div>
                  </div>
                  <div className="products-grid-wrapper isotope-wrapper">
                    <div className="products-grid isotope four-in-row product-variant-5">
                      {this.renderProductItem()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default ProductDetail;