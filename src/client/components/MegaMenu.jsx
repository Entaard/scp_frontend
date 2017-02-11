import React, { Component } from 'react'
import { Link } from 'react-router'

export class MegaMenu extends Component {
  render() {
    return(
        <div className="megamenu fadein blackout">
          <ul className="nav">
            <li className="simple-dropdown">
              <a href="index.html">HOME</a>
              <div className="sub-menu">
                <ul className="category-links">
                  <li><a href="index.html" title="">Default</a></li>
                  <li><a href="index-bg-white.html" title="">White Background</a></li>
                  <li><a href="index-layout-6.html" title="">Wide + Side Panel</a></li>
                  <li><a href="index-layout-1.html" title="">Classic</a></li>
                  <li><a href="index-layout-2.html" title="">Journal<span
                      className="menu-label">new look</span></a>
                  </li>
                  <li><a href="index-layout-3.html" title="">Banners Boom</a></li>
                  <li><a href="index-fullscreen-slider.html" title="">Fullscreen Slider</a></li>
                  <li><a href="index-layout-4.html" title="">Amason</a></li>
                  <li><a href="index-layout-5.html" title="">Lookbook</a></li>
                  <li><a href="index-rtl.html" title="">RTL</a></li>
                  <li><a href="index-popup.html" title="">Popup on Load</a></li>
                </ul>
              </div>
            </li>
            <li className="simple-dropdown">
              <a href="#" title="">Pages</a>
              <div className="sub-menu">
                <ul className="category-links">
                  <li>
                    <a href="category.html" title="">Listing<span
                        className="menu-label-alt">NEW FEATURES</span></a><span className="arrow"></span>
                    <ul>
                      <li><a href="category.html" title="">Classic Listing</a>
                      </li>
                      <li><a href="category-fixed-sidebar.html" title="">Listing Fixed Filter<span
                          className="menu-label-alt">NEW </span></a>
                      </li>
                      <li><a href="category-no-filter.html" title="">Listing No Filter</a></li>
                      <li><a href="category-empty.html" title="">Empty Category</a></li>
                      <li><a href="category.html" title="">Products per row</a><span className="arrow"></span>
                        <ul>
                          <li><a href="category-2-per-row.html" title="">2 per row</a></li>
                          <li><a href="category-3-per-row.html" title="">3 per row</a></li>
                          <li><a href="category-4-per-row.html" title="">4 per row</a></li>
                          <li><a href="category-5-per-row.html" title="">5 per row</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="product.html" title="">Product</a>
                    <ul>
                      <li><a href="product.html" title="">Classic design</a><span className="arrow"></span>
                        <ul>
                          <li><a href="product-image-small.html" title="">Image small</a></li>
                          <li><a href="product-image-medium.html" title="">Image medium</a></li>
                          <li><a href="product-image-medium-plus.html" title="">Image medium plus</a></li>
                          <li><a href="product-image-large.html" title="">Image large</a></li>
                        </ul>
                      </li>
                      <li><a href="product-creative.html" title="">Creative design</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="index.html" title="">Headers</a>
                    <ul>
                      <li><a href="header-variant-1.html" title="">Header 1 (one row shift)</a></li>
                      <li><a href="header-variant-2.html" title="">Header 2 (one row)</a></li>
                      <li><a href="header-variant-3.html" title="">Header 3 (one row dark)</a></li>
                      <li><a href="header-variant-4.html" title="">Header 4 (three rows)</a></li>
                      <li><a href="header-variant-5.html" title="">Header 5 (two rows)</a></li>
                      <li><a href="header-variant-6.html" title="">Header 6 (two rows center)</a></li>
                      <li><a href="header-variant-7.html" title="">Header 7 (three row)</a></li>
                      <li><a href="header-variant-8.html" title="">Header 8 (department)</a></li>
                      <li><a href="header-variant-9.html" title="">Header 9 (creative)</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="index.html" title="">Footers</a>
                    <ul>
                      <li><a href="footer-variant-1.html" title="">Footer 1 (simple)</a></li>
                      <li><a href="footer-variant-2.html" title="">Footer 2 (links)</a></li>
                      <li><a href="footer-variant-3.html" title="">Footer 3 (menu)</a></li>
                      <li><a href="footer-variant-4.html" title="">Footer 4 (advanced)</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="gallery.html" title="">Gallery</a>
                    <ul>
                      <li><a href="gallery.html" title="">Gallery 2 in row</a></li>
                      <li><a href="gallery-3-per-row.html" title="">Gallery 3 in row</a></li>
                      <li><a href="gallery-simple.html" title="">No isotope Gallery</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html" title="">Blog</a>
                    <ul>
                      <li><a href="blog.html" title="">List+Sidebar</a></li>
                      <li><a href="blog-grid-2.html" title="">Grid 2</a></li>
                      <li><a href="blog-grid-3.html" title="">Grid 3</a></li>
                      <li><a href="blog-grid-4.html" title="">Grid 4</a></li>
                      <li><a href="blog-single.html" title="">Single Post</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" title="">Pages</a>
                    <ul>
                      <li><a href="faq.html" title="">Faq</a></li>
                      <li><a href="about.html" title="">About Us</a></li>
                      <li><a href="contact.html" title="">Contact Us</a></li>
                      <li><a href="404.html" title="">404</a></li>
                      <li><a href="typography.html" title="">Typography</a></li>
                      <li><a href="coming-soon.html" title="">Coming soon</a></li>
                      <li><a href="login.html" title="">Login</a></li>
                      <li><a href="account-create.html" title="">Account</a></li>
                    </ul>
                  </li>
                  <li><a href="http:-shopify.big-skins.com/banners-grid-online-editor/" title="">Banners /
                    Grid Editor<span className="menu-label-alt">EXCLUSIVE</span></a></li>
                </ul>
              </div>
            </li>
            <li className="mega-dropdown">
              <a href="category.html">Men<span className="menu-label">-15%</span></a>
              <div className="sub-menu">
                <div className="container">
                  <div className="megamenu-categories column-4">
                    <div className="col">
                      <a className="category-image" href="#"><img src="/images/category/megamenu-category-03.jpg"
                      /></a>
                      <div className="category-title"><a href="#">Only New</a></div>
                      <ul className="category-links">
                        <li><a href="#">New In Clothing</a></li>
                        <li><a href="#">New In Shoes</a></li>
                        <li><a href="#">New In Accessories</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <a className="category-image" href="#"><img src="/images/category/megamenu-category-04.jpg"
                      /></a>
                      <div className="category-title"><a href="#">Only Sale</a></div>
                      <ul className="category-links">
                        <li><a href="#">Sale Clothing</a></li>
                        <li><a href="#"><b>Sale Shoes</b><span className="menu-label">THREE DAYS ONLY!</span></a>
                        </li>
                        <li><a href="#">Sale Accessories</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <a className="category-image" href="#"><img src="/images/category/megamenu-category-05.jpg"
                      /></a>
                      <div className="category-title"><a href="#">Top</a><span
                          className="menu-label-alt">NEW</span></div>
                      <ul className="category-links">
                        <li><a href="#">T-Shirts & Vests</a></li>
                        <li><a href="#">Jumpers & Cardigans</a></li>
                        <li><a href="#">Coats & Jackets</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <a className="category-image" href="#">
                        <img src="/images/category/megamenu-category-06.jpg"/></a>
                      <div className="category-title"><a href="#">Bottom</a></div>
                      <ul className="category-links">
                        <li><a href="#">Shorts</a></li>
                        <li><a href="#">Pants</a></li>
                        <li><a href="#">Denim</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mega-dropdown">
              <a href="category.html">Women<span className="menu-label-alt">NEW</span></a>
              <div className="sub-menu">
                <div className="container">
                  <div className="megamenu-right width-25">
                    <div className="banner style-1 autosize-text" data-fontratio="4.2">
                      <img src="/images/banners/banner-1.jpg" alt="Banner"/>
                      <div className="banner-caption vertb">
                        <div className="vert-wrapper">
                          <div className="vert">
                            <div className="text-1">WOMEN 2016</div>
                            <div className="text-2">collections sale</div>
                            <div className="text-3"> SAVE UP TO 40% OF</div>
                            <a href="#buttonlink" className="banner-btn-wrap">
                              <div className="banner-btn text-hoverslide" data-hcolor="#f82e56"><span><span
                                  className="text">SHOP NOW</span><span className="hoverbg"></span></span>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="megamenu-categories column-2">
                    <div className="col">
                      <a className="category-image" href="#"><img
                          src="/images/category/megamenu-category-01.jpg"/></a>
                      <div className="category-title title-border"><a href="#">ACCESSORIES<span
                          className="menu-label">HOT</span></a></div>
                      <ul className="category-links column-count-2">
                        <li><a href="#">New In</a></li>
                        <li><a href="#">Belt Buckles</a></li>
                        <li><a href="#">Collar Tips</a></li>
                        <li><a href="#">Fascinators & Headpieces<span className="menu-label">HOT PRICE</span></a>
                        </li>
                        <li><a href="#">Gloves & Mittens</a></li>
                        <li><a href="#">Hair Accessories</a></li>
                        <li><a href="#">Handkerchiefs</a></li>
                        <li><a href="#">ID & Document Holders</a></li>
                        <li><a href="#">T-Shirts & Vests</a></li>
                        <li><a href="#">Rings & Finders</a></li>
                        <li><a href="#">Day Planners</a></li>
                        <li><a href="#">Scarves & Wraps</a></li>
                        <li><a href="#">Wallets</a></li>
                        <li><a href="#">Umbrellas</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <a className="category-image" href="#"><img src="/images/category/megamenu-category-02.jpg"
                      /></a>
                      <div className="category-title title-border"><a href="#">CLOTHING<span
                          className="menu-label-alt">NEW</span></a></div>
                      <ul className="category-links column-count-2">
                        <li><a href="#">New In</a></li>
                        <li><a href="#">T-Shirts & Vests</a></li>
                        <li><a href="#">Jumpers & Cardigans</a></li>
                        <li><a href="#">Hoodies & Sweats<span className="menu-label">-15%</span></a></li>
                        <li><a href="#">Coats & Jackets</a></li>
                        <li><a href="#">Joggers & Tracksuits</a></li>
                        <li><a href="#">Shorts</a></li>
                        <li><a href="#">Athletic Apparel</a></li>
                        <li><a href="#">Intimates & Sleep</a></li>
                        <li><a href="#">Outerwear</a></li>
                        <li><a href="#">Swimwear</a></li>
                        <li><a href="#">Denim Collection</a></li>
                        <li><a href="#">Tops & Blouses</a></li>
                        <li><a href="#">Shorts</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-bottom">
                      <a href="#"><img className="img-responsive" src="/images/banners/banner-megamenu.jpg"
                                       alt="megamenu banner"/></a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="mega-dropdown">
              <a href="category.html">Electronics</a>
              <div className="sub-menu">
                <div className="container">
                  <div className="megamenu-left width-33">
                    <a href="#bannerLink" className="banner-wrap">
                      <div className="banner style-13 autosize-text image-hover-scale" data-fontratio="4">
                        <img src="/images/banners/banner-21.jpg" alt="Banner"/>
                        <div className="banner-caption horc vertb" style={{bottom: '3%'}}>
                          <div className="vert-wrapper">
                            <div className="vert">
                              <div className="text-1">NEW STYLE</div>
                              <div className="text-2">New Collection</div>
                              <div className="banner-btn text-hoverslide" data-hcolor="#f82e56">
                                      <span>
                                        <span className="text">SHOP NOW</span><span className="hoverbg"></span>
                                      </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="megamenu-categories column-3">
                    <div className="col">
                      <a className="category-image light" href="#"><img
                          src="/images/category/megamenu-category-07.jpg"/></a>
                      <div className="category-title title-border"><a href="#">Cameras & Camcorders<span
                          className="menu-label">HOT</span></a></div>
                      <ul className="category-links">
                        <li><a href="#">New In</a></li>
                        <li><a href="#">All Cameras</a></li>
                        <li><a href="#">All Camcorders</a></li>
                        <li><a href="#">Camera Accessories</a></li>
                        <li><a href="#">Camera Lenses</a></li>
                        <li><a href="#">Memory Cards</a></li>
                        <li><a href="#">Web Cameras</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <a className="category-image light" href="#"><img
                          src="/images/category/megamenu-category-09.jpg"/></a>
                      <div className="category-title title-border"><a href="#">Cell Phones<span
                          className="menu-label-alt">NEW</span></a>
                      </div>
                      <ul className="category-links">
                        <li><a href="#">No-Contract Phones & Plans</a></li>
                        <li><a href="#">Accessories</a></li>
                        <li><a href="#">Apple iPhone</a></li>
                        <li><a href="#">Mobile Hotspots & Plans<span className="menu-label">-15%</span></a></li>
                        <li><a href="#">Samsung Galaxy</a></li>
                        <li><a href="#">Prepaid Cell Phones</a></li>
                        <li><a href="#">SIM Cards</a></li>
                      </ul>
                    </div>
                    <div className="col">
                      <a className="category-image light" href="#"><img
                          src="/images/category/megamenu-category-08.jpg"/></a>
                      <div className="category-title title-border"><a href="#">Video Games<span
                          className="menu-label">HOT</span></a></div>
                      <ul className="category-links">
                        <li><a href="#">PlayStation 4</a></li>
                        <li><a href="#">Xbox One</a></li>
                        <li><a href="#">Nintendo 3DS / 2DS</a></li>
                        <li><a href="#">Video Game Accessories></a></li>
                        <li><a href="#">Xbox Live Cards</a></li>
                        <li><a href="#">Strategy Guides</a></li>
                        <li><a href="#"><i className="icon icon-gift"></i> Gaming Gift Cards</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

    )
  }
}

export default MegaMenu;
