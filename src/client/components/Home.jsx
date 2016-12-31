import React, {Component} from 'react'
import BlogItem from './BlogItem'

export class Home extends Component {
  render() {
    return (
      <div className="page-main">
        <div className="block fullwidth full-nopad bottom-space">
          <div className="container">
            <div className="mainSlider" data-thumb="true" data-thumb-width="230" data-thumb-height="100">
              <div className="sliderLoader">Loading...</div>
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide" data-thumb="images/slider/slide-02-thumb.png" data-href="http:.com"
                       data-target="_blank">
                    <div className="wrapper">
                      <figure><img src="images/slider/slide-02.jpg" alt=""/></figure>
                      <div className="text2-1 animate" data-animate="flipInY" data-delay="0"> Seikō</div>
                      <div className="text2-2 animate" data-animate="bounceIn" data-delay="500"> Season sale</div>
                      <div className="text2-3 animate" data-animate="bounceIn" data-delay="1000"> popular brands</div>
                      <div className="text2-4 animate" data-animate="rubberBand" data-delay="1500"> 70%</div>
                      <div className="text2-5 animate" data-animate="hinge" data-delay="2000"> OFF</div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-thumb="images/slider/slide-01-thumb.png">
                    <div className="wrapper">
                      <figure><img src="images/slider/slide-01.jpg" alt=""/></figure>
                      <div className="caption animate" data-animate="fadeIn">
                        <div className="text1 animate" data-animate="flipInY" data-delay="0"> Seikō</div>
                        <div className="text2 animate" data-animate="bounceInLeft" data-delay="500"><strong>New</strong>
                          collection
                        </div>
                        <div className="text3 animate" data-animate="bounceInLeft" data-delay="1500"> WOMEN'S <strong>FASHION</strong>
                        </div>
                        <div className="animate" data-animate="fadeIn" data-delay="2000">
                          <a href="#" className="cool-btn"
                             style={{clipPath: 'url(#coolButton)'}}>
                            <span>MORE</span> </a>
                          <svg className="clip-svg">
                            <defs>
                              <clipPath id="coolButton" clipPathUnits="objectBoundingBox">
                                <polygon points="0 .18, .99 .15, .91 .85, .07 .8"/>
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide" data-thumb="images/slider/slide-03-thumb.png">
                    <div className="wrapper">
                      <figure><img src="images/slider/slide-03.jpg" alt=""/></figure>
                      <div className="text3-1 animate" data-animate="bounceInDown" data-delay="0"> Street</div>
                      <div className="text3-2 animate" data-animate="bounceInDown" data-delay="500"> Fashion</div>
                      <div className="text3-3 animate" data-animate="bounceInDown" data-delay="1000"> And</div>
                      <div className="text3-4 animate" data-animate="bounceIn" data-delay="1500"> Urban</div>
                      <div className="text3-5 animate" data-animate="bounceIn" data-delay="2000"> Subcultures</div>
                      <a href="#" className="text3-6 animate" data-animate="rubberBand" data-delay="2500"> SHOP NOW </a>
                    </div>
                  </div>
                  <div className="swiper-slide" data-thumb="images/slider/slide-04-thumb.png">
                    <div className="wrapper">
                      <figure><img src="images/slider/slide-04.jpg" alt=""/></figure>
                      <div className="text4-1 animate" data-animate="bounceInLeft" data-delay="0">Summer</div>
                      <div className="text4-2 animate" data-animate="bounceInDown" data-delay="500">very soon</div>
                      <div className="text4-3 animate" data-animate="bounceInUp" data-delay="1000">Things to buy a swimsuit
                        at a discount
                      </div>
                      <a href="#" className="text4-4 animate" data-animate="bounceInLeft" data-delay="1500">SHOP NOW</a>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-pagination-thumbs">
                  <div className="thumbs-wrapper">
                    <div className="thumbs"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <div className="text-center bottom-space">
              <h1 className="size-lg no-padding">WELCOME TO <span className="logo-font custom-color">Seikō</span> STORE</h1>
              <div className="line-divider"></div>
              <p className="custom-color-alt">Lorem ipsum dolor sit amet, ex eam mundi populo accusamus, aliquam quaestio
                petentium te cum.
                <br/> Vim ei oblique tacimates, usu cu iudico graeco. Graeci eripuit inimicus vel eu, eu mel unum
                laoreet splendide, cu integre apeirian has.
              </p>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="box style2 bgcolor1 text-center">
                  <div className="box-icon"><i className="icon icon-truck"></i></div>
                  <h3 className="box-title">FREE SHIPPING</h3>
                  <div className="box-text">Free shipping on all orders over $199</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box style2 bgcolor2 text-center">
                  <div className="box-icon"><i className="icon icon-dollar"></i></div>
                  <h3 className="box-title">MONEY BACK</h3>
                  <div className="box-text">100% money back guarantee</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="box style2 bgcolor3 text-center">
                  <div className="box-icon"><i className="icon icon-help"></i></div>
                  <h3 className="box-title">ONLINE SUPPORT</h3>
                  <div className="box-text">Service support fast 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="container">
            <ul className="filters filters-product style2">
              <li><a href="#" className="filter-label">All<span className="count"></span></a></li>
              <li><a href="#" className="filter-label active" data-filter=".category1">New<span className="count"></span></a>
              </li>
              <li><a href="#" className="filter-label" data-filter=".category2">Sale<span className="count"></span></a></li>
            </ul>
            <div className="products-grid-wrapper isotope-wrapper">
              <div className="products-grid isotope four-in-row product-variant-4">
                <div className="product-item large category2">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-sale"><span>-20%</span></div>


                        <div className="product-item-gallery-main">
                          <a href="#"><img className="product-image-photo" src="images/products/product-16-c1.jpg" alt=""/></a>
                          <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                            className="icon icon-eye"></i><span>Quick View</span></a>
                        </div>

                        <div className="countdown-box hidden-xs">
                          <div className="countdown-wrapper">
                            <div className="countdown-title">special price expires in</div>
                            <div className="countdown" data-promodate="2016/12/01"></div>
                          </div>
                        </div>

                        <a href="#" title="Add to Wishlist" className="wishlist active"> <i
                          className="icon icon-heart"></i><span>Add to Wishlist</span> </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Long sleeve overall" href="product.html"
                                                          className="product-item-link">Long sleeve overall</a></div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="old-price">$190.00</span> <span className="special-price">$149.00</span> </span>
													</span>
                        </div>
                        <ul className="color-swatch hidden-xs">
                          <li className="active">
                            <a data-image="images/products/product-16-c1.jpg" href="#"><img
                              src="images/colorswatch/color-blue.png" alt="Blue"/></a>
                          </li>
                          <li>
                            <a data-image="images/products/product-16-c2.jpg" href="#"><img
                              src="images/colorswatch/color-grey.png" alt="Gray"/></a>
                          </li>
                          <li>
                            <a data-image="images/products/product-16-c3.jpg" href="#"><img
                              src="images/colorswatch/color-red.png" alt="Red"/></a>
                          </li>
                          <li>
                            <a data-image="images/products/product-16-c4.jpg" href="#"><img
                              src="images/colorswatch/color-violet.png" alt="Violet"/></a>
                          </li>
                          <li>
                            <a data-image="images/products/product-16-c5.jpg" href="#"><img
                              src="images/colorswatch/color-green.png" alt="Green"/></a>
                          </li>
                        </ul>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item previews-3 large category1">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-new"><span>New</span></div>


                        <div className="product-item-gallery-main">
                          <a href="#"><img className="product-image-photo" src="images/products/product-20.jpg" alt=""/></a>
                          <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                            className="icon icon-eye"></i><span>Quick View</span></a>
                        </div>


                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>


                        <div className="product-item-gallery-previews-wrapper">
                          <div className="product-item-gallery-previews">
                            <div className="item">
                              <a href="#"><img src="images/products/product-20.jpg"
                                               data-image="images/products/product-20.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-20-1.jpg"
                                               data-image="images/products/product-20-1.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-20-2.jpg"
                                               data-image="images/products/product-20-2.jpg" alt=""/></a>
                            </div>
                          </div>
                          <div className="carousel-arrows"></div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Lace back mini dress" href="product.html"
                                                          className="product-item-link">Lace back mini dress</a></div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"><span
                          className="price">$239.00</span> </span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item previews-3 large category2">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-sale"><span>-20%</span></div>

                        <div className="product-item-gallery">

                          <div className="product-item-gallery-main">
                            <a href="#"><img className="product-image-photo" src="images/products/product-26.jpg"
                                             alt=""/></a>
                            <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                              className="icon icon-eye"></i><span>Quick View</span></a>
                          </div>

                        </div>
                        <div className="countdown-box hidden-xs">
                          <div className="countdown-wrapper">
                            <div className="countdown-title">special price expires in</div>
                            <div className="countdown" data-promoperiod="100000000"></div>
                          </div>
                        </div>


                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>


                        <div className="product-item-gallery-previews-wrapper">
                          <div className="product-item-gallery-previews">
                            <div className="item">
                              <a href="#"><img src="images/products/product-26.jpg"
                                               data-image="images/products/product-26.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-26-1.jpg"
                                               data-image="images/products/product-26-1.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-26-2.jpg"
                                               data-image="images/products/product-26-2.jpg" alt=""/></a>
                            </div>
                          </div>
                          <div className="carousel-arrows"></div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Grey T-shirt fashion Sportex" href="product.html"
                                                          className="product-item-link">Grey T-shirt fashion Sportex</a>
                        </div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="old-price">$300.00</span> <span className="special-price">$249.00</span> </span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item previews-2 large category1 category2">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-new"><span>New</span></div>
                        <div className="product-item-label label-sale"><span>-20%</span></div>


                        <div className="product-item-gallery-main">
                          <a href="#"><img className="product-image-photo" src="images/products/product-25.jpg" alt=""/></a>
                          <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                            className="icon icon-eye"></i><span>Quick View</span></a>
                        </div>

                        <div className="countdown-box hidden-xs">
                          <div className="countdown-wrapper">
                            <div className="countdown-title">special price expires in</div>
                            <div className="countdown" data-promodate="2016/12/01"></div>
                          </div>
                        </div>

                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>


                        <div className="product-item-gallery-previews-wrapper">
                          <div className="product-item-gallery-previews">
                            <div className="item">
                              <a href="#"><img src="images/products/product-25.jpg"
                                               data-image="images/products/product-25.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-25-1.jpg"
                                               data-image="images/products/product-25-1.jpg" alt=""/></a>
                            </div>
                          </div>
                          <div className="carousel-arrows"></div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Mesh bodycon dress" href="product.html"
                                                          className="product-item-link">Mesh bodycon dress</a></div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="old-price">$290.00</span> <span className="special-price">$229.00</span> </span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item previews-2 large">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">
                        <div className="product-item-gallery">

                          <div className="product-item-gallery-main">
                            <a href="#"><img className="product-image-photo" src="images/products/product-18.jpg"
                                             alt=""/></a>
                            <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                              className="icon icon-eye"></i><span>Quick View</span></a>
                          </div>

                        </div>

                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>


                        <div className="product-item-gallery-previews-wrapper">
                          <div className="product-item-gallery-previews">
                            <div className="item">
                              <a href="#"><img src="images/products/product-18.jpg"
                                               data-image="images/products/product-18.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-18-1.jpg"
                                               data-image="images/products/product-18-1.jpg" alt=""/></a>
                            </div>
                          </div>
                          <div className="carousel-arrows"></div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Backless mini dress" href="product.html"
                                                          className="product-item-link">Backless mini dress</a></div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="price">$89.00</span></span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item large category1">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-new"><span>New</span></div>

                        <div className="product-item-gallery">

                          <div className="product-item-gallery-main">
                            <a href="#"><img className="product-image-photo" src="images/products/product-10.jpg"
                                             alt=""/></a>
                            <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                              className="icon icon-eye"></i><span>Quick View</span></a>
                          </div>

                        </div>

                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Longline  asymmetric midi skirt" href="product.html"
                                                          className="product-item-link">Longline asymmetric midi skirt</a>
                        </div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="price">$210.00</span></span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item previews-3 large category1">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-new"><span>New</span></div>


                        <div className="product-item-gallery-main">
                          <a href="#"><img className="product-image-photo" src="images/products/product-17.jpg" alt=""/></a>
                          <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                            className="icon icon-eye"></i><span>Quick View</span></a>
                          <a href="product.html" className="product-item-not-available">
														<span className="vert-wrapper"><span className="vert"><span className="text">Not Available</span></span>
														</span>
                          </a>
                        </div>


                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>


                        <div className="product-item-gallery-previews-wrapper">
                          <div className="product-item-gallery-previews">
                            <div className="item">
                              <a href="#"><img src="images/products/product-17.jpg"
                                               data-image="images/products/product-17.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-17-1.jpg"
                                               data-image="images/products/product-17-1.jpg" alt=""/></a>
                            </div>
                            <div className="item">
                              <a href="#"><img src="images/products/product-17-2.jpg"
                                               data-image="images/products/product-17-2.jpg" alt=""/></a>
                            </div>
                          </div>
                          <div className="carousel-arrows"></div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Floral sleeveless dress" href="product.html"
                                                          className="product-item-link">Floral sleeveless dress</a></div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="price">$289.00</span> </span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>


                <div className="product-item large category2">
                  <div className="product-item-inside">
                    <div className="product-item-info">

                      <div className="product-item-photo">

                        <div className="product-item-label label-sale"><span>-50%</span></div>

                        <div className="product-item-gallery">

                          <div className="product-item-gallery-main">
                            <a href="#"><img className="product-image-photo" src="images/products/product-27.jpg"
                                             alt=""/></a>
                            <a href="quick-view.html" title="Quick View" className="quick-view-link quick-view-btn"> <i
                              className="icon icon-eye"></i><span>Quick View</span></a>
                          </div>

                        </div>
                        <div className="countdown-box hidden-xs">
                          <div className="countdown-wrapper">
                            <div className="countdown-title">special price expires in</div>
                            <div className="countdown" data-promoperiod="150000000"></div>
                          </div>
                        </div>

                        <a href="#" title="Add to Wishlist" className="no_wishlist"> <i className="icon icon-heart"></i><span>Add to Wishlist</span>
                        </a>
                        <div className="product-item-actions">
                          <div className="share-button toBottom">
                            <span className="toggle"></span>
                            <ul className="social-list">
                              <li>
                                <a href="#" className="icon icon-google google"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-fancy fancy"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-pinterest pinterest"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-twitter-logo twitter"></a>
                              </li>
                              <li>
                                <a href="#" className="icon icon-facebook-logo facebook"></a>
                              </li>
                            </ul>
                          </div>
                        </div>

                      </div>


                      <div className="product-item-details">
                        <div className="product-item-name"><a title="Athletic T-Shirt" href="product.html"
                                                          className="product-item-link">Athletic T-Shirt</a></div>
                        <div className="product-item-description">Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                          amet, consectetur, adipisci velit, sed quia nonkdni numquam eius modi tempora incidunt ut
                          labore
                        </div>
                        <div className="price-box"> <span className="price-container"> <span className="price-wrapper"> <span
                          className="old-price">$420.00</span> <span className="special-price">$210.00</span> </span>
													</span>
                        </div>
                        <div className="product-item-rating"><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i><i
                          className="icon icon-star-fill"></i><i className="icon icon-star-fill"></i></div>
                        <button className="btn add-to-cart" data-product="789123"><i className="icon icon-cart"></i><span>Add to Cart</span>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="block banners-with-pad">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <a href="#" className="banner-wrap">
                  <div className="banner style-17 autosize-text image-hover-scale" data-fontratio="4.6">
                    <img src="images/banners/banner-17.jpg" alt="Banner"/>
                    <div className="banner-caption vertb horl">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div className="text-1">Fashion collection</div>
                          <div className="text-2 text-hoverslide" data-hcolor="#ffffff"><span><span
                            className="text">Underwear</span><span className="hoverbg"></span></span>
                          </div>
                          <div className="text-3">To take a trivial example, which of us ever undtakes
                            <br/> laborious physical exercise
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#bannerLink" className="banner-wrap">
                  <div className="banner style-18 autosize-text image-hover-scale" data-fontratio="4.6">
                    <img src="images/banners/banner-18.jpg" alt="Banner"/>
                    <div className="banner-caption vertl horl">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div className="text-1">BIG STATMENT</div>
                          <div className="text-2">AWESOME BRA</div>
                          <div className="banner-btn text-hoverslide" data-hcolor="#fff"><span><span className="text">SPECIAL OFFERS</span><span
                            className="hoverbg"></span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-5">
                <a href="#bannerLink" className="banner-wrap">
                  <div className="banner style-19 autosize-text image-hover-scale" data-fontratio="4.6">
                    <img src="images/banners/banner-19.jpg" alt="Banner"/>
                    <div className="banner-caption vertb horl">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div className="text-1">FASHION NIGHT</div>
                          <div className="text-2">HAS ARRIVED</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#bannerLink" className="banner-wrap">
                  <div className="banner style-20 autosize-text image-hover-scale" data-fontratio="4.6">
                    <img src="images/banners/banner-20.jpg" alt="Banner"/>
                    <div className="banner-caption vertb horr">
                      <div className="vert-wrapper">
                        <div className="vert">
                          <div className="text-1">Always Up To Date<span className="text-corner"></span></div>
                          <div className="text-2">URBAN CLOTHING</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="block bottom-space">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="title">
                  <h2>From Blog</h2>
                  <div className="carousel-arrows"></div>
                </div>
                <div className="blog-carousel">
                  <BlogItem/>
                  <BlogItem/>
                  <BlogItem/>
                  <BlogItem/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="title">
                  <h2>From Blog</h2>
                  <div className="carousel-arrows"></div>
                </div>
                <div className="blog-carousel">
                  <BlogItem/>
                  <BlogItem/>
                  <BlogItem/>
                  <BlogItem/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block fullwidth full-nopad">
          <div className="container">
            <div id="instafeed" className="instagramm-feed-full"></div>
            <div className="instagramm-title">Instagram Feed</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
