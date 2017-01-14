import React, {Component} from 'react';
import {Link} from 'react-router';
require('../containers/admin/admin.scss');
export class AdminHeader extends Component {
  render() {
    return (
        <header className="page-header variant-2 dark fullboxed sticky stickydark">
          <div className="navbar">
            <div className="container">
              <div className="menu-toggle"><a href="#"
                                          className="mobilemenu-toggle"><i className="icon icon-menu"></i></a></div>
              <div className="header-links">
                <div className="header-link dropdown-link header-account">
                  <a href="#"><i className="icon icon-user"></i></a>
                  <div className="dropdown-container right">
                    <div className="title">Registered Customers</div>
                    <div className="top-text">If you have an account with us, please log in.</div>
                    <form action="#">
                      <input type="text"
                             className="form-control"
                             placeholder="E-mail*"/>
                      <input type="text"
                             className="form-control"
                             placeholder="Password*"/>
                      <button type="submit"
                              className="btn">Sign in
                      </button>
                    </form>
                    <div className="title">OR</div>
                    <div className="bottom-text">Create a <a href="account-create.html">New Account</a></div>
                  </div>
                </div>
              </div>
              <div className="header-link header-search header-search">
                <div className="exp-search">
                  <form>
                    <input className="exp-search-input "
                           placeholder="Search here ..."
                           type="text"
                           />
                    <input className="exp-search-submit"
                           type="submit"
                           />
                    <span className="exp-icon-search"><i className="icon icon-magnify"></i></span>
                    <span className="exp-search-close"><i className="icon icon-close"></i></span>
                  </form>
                </div>
              </div>
              <div className="header-logo">
                <a href="index.html"
                   title="Logo"><img src="images/logo.png"
                                     alt="Logo"/></a>
              </div>
              <div className="mobilemenu dblclick">
                <div className="mobilemenu-header">
                  <div className="title">MENU</div>
                  <a href="#"
                     className="mobilemenu-toggle"></a>
                </div>
                <div className="mobilemenu-content">
                  <ul className="nav">
                    <li><a href="index.html">HOME</a><span className="arrow"></span>
                      <ul>
                        <li><a href="index.html"
                               title="">Default</a></li>
                        <li><a href="index-bg-white.html"
                               title="">White Background</a></li>
                        <li><a href="index-layout-6.html"
                               title="">Wide + Side Panel</a></li>

                        <li><a href="index-layout-1.html"
                               title="">Classic</a></li>
                        <li><a href="index-layout-2.html"
                               title="">Journal<span className="menu-label">new look</span></a></li>
                        <li><a href="index-layout-3.html"
                               title="">Banners Boom</a></li>
                        <li><a href="index-fullscreen-slider.html"
                               title="">Fullscreen Slider</a></li>
                        <li><a href="index-layout-4.html"
                               title="">Amason</a></li>
                        <li><a href="index-layout-5.html"
                               title="">Lookbook</a></li>
                        <li><a href="index-rtl.html"
                               title="">RTL</a></li>
                        <li><a href="index-popup.html"
                               title="">Popup on Load</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="#"
                         title="">Pages</a><span className="arrow"></span>
                      <ul>
                        <li>
                          <a href="category.html"
                             title="">Listing<span className="menu-label-alt">NEW FEATURES</span></a><span className="arrow"></span>
                          <ul>
                            <li><a href="category.html"
                                   title="">Classic Listing</a>
                            </li>
                            <li><a href="category-fixed-sidebar.html"
                                   title="">Listing Fixed Filter<span className="menu-label-alt">NEW </span></a>
                            </li>
                            <li><a href="category-no-filter.html"
                                   title="">Listing No Filter</a></li>
                            <li><a href="category-empty.html"
                                   title="">Empty Category</a></li>
                            <li><a href="category.html"
                                   title="">Products per row</a><span className="arrow"></span>
                              <ul>
                                <li><a href="category-2-per-row.html"
                                       title="">2 per row</a></li>
                                <li><a href="category-3-per-row.html"
                                       title="">3 per row</a></li>
                                <li><a href="category-4-per-row.html"
                                       title="">4 per row</a></li>
                                <li><a href="category-5-per-row.html"
                                       title="">5 per row</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="product.html"
                             title="">Product</a><span className="arrow"></span>
                          <ul>
                            <li><a href="product.html"
                                   title="">Classic design</a><span className="arrow"></span>
                              <ul>
                                <li><a href="product-image-small.html"
                                       title="">Image small</a></li>
                                <li><a href="product-image-medium.html"
                                       title="">Image medium</a></li>
                                <li><a href="product-image-medium-plus.html"
                                       title="">Image medium plus</a></li>
                                <li><a href="product-image-large.html"
                                       title="">Image large</a></li>
                              </ul>
                            </li>
                            <li><a href="product-creative.html"
                                   title="">Creative design</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="index.html"
                             title="">Headers</a><span className="arrow"></span>
                          <ul>
                            <li><a href="header-variant-1.html"
                                   title="">Header 1 (one row shift)</a></li>
                            <li><a href="header-variant-2.html"
                                   title="">Header 2 (one row)</a></li>
                            <li><a href="header-variant-3.html"
                                   title="">Header 3 (one row dark)</a></li>
                            <li><a href="header-variant-4.html"
                                   title="">Header 4 (three rows)</a></li>
                            <li><a href="header-variant-5.html"
                                   title="">Header 5 (two rows)</a></li>
                            <li><a href="header-variant-6.html"
                                   title="">Header 6 (two rows center)</a></li>
                            <li><a href="header-variant-7.html"
                                   title="">Header 7 (three row)</a></li>
                            <li><a href="header-variant-8.html"
                                   title="">Header 8 (department)</a></li>
                            <li><a href="header-variant-9.html"
                                   title="">Header 9 (creative)</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="index.html"
                             title="">Footers</a><span className="arrow"></span>
                          <ul>
                            <li><a href="footer-variant-1.html"
                                   title="">Footer 1 (simple)</a></li>
                            <li><a href="footer-variant-2.html"
                                   title="">Footer 2 (links)</a></li>
                            <li><a href="footer-variant-3.html"
                                   title="">Footer 3 (menu)</a></li>
                            <li><a href="footer-variant-4.html"
                                   title="">Footer 4 (advanced)</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="gallery.html"
                             title="">Gallery</a><span className="arrow"></span>
                          <ul>
                            <li><a href="gallery.html"
                                   title="">Gallery 2 in row</a></li>
                            <li><a href="gallery-3-per-row.html"
                                   title="">Gallery 3 in row</a></li>
                            <li><a href="gallery-simple.html"
                                   title="">No isotope Gallery</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html"
                             title="">Blog</a>
                          <ul>
                            <li><a href="blog.html"
                                   title="">List+Sidebar</a></li>
                            <li><a href="blog-grid-2.html"
                                   title="">Grid 2</a></li>
                            <li><a href="blog-grid-3.html"
                                   title="">Grid 3</a></li>
                            <li><a href="blog-grid-4.html"
                                   title="">Grid 4</a></li>
                            <li><a href="blog-single.html"
                                   title="">Single Post</a></li>
                          </ul>
                        </li>
                        <li>
                          <a href="#"
                             title="">Pages</a><span className="arrow"></span>
                          <ul>
                            <li><a href="faq.html"
                                   title="">Faq</a></li>
                            <li><a href="about.html"
                                   title="">About Us</a></li>
                            <li><a href="contact.html"
                                   title="">Contact Us</a></li>
                            <li><a href="404.html"
                                   title="">404</a></li>
                            <li><a href="typography.html"
                                   title="">Typography</a></li>
                            <li><a href="coming-soon.html"
                                   title="">Coming soon</a></li>
                            <li><a href="login.html"
                                   title="">Login</a></li>
                            <li><a href="account-create.html"
                                   title="">Account</a></li>
                            <li><a href="cart.html"
                                   title="">Cart</a></li>
                            <li><a href="cart-empty.html"
                                   title="">Empty Cart</a></li>
                            <li><a href="wishlist.html"
                                   title="">Wishlist</a></li>
                          </ul>
                        </li>
                        <li><a href="http://seiko-shopify.big-skins.com/banners-grid-online-editor/"
                               title="">Banners / Grid Editor<span className="menu-label-alt">EXCLUSIVE</span></a></li>
                      </ul>
                    </li>
                    <li><a href="category.html">Men</a></li>
                    <li><a href="category.html">Women</a></li>
                    <li><a href="category.html">Electronics</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
    )
  }
}
export default AdminHeader;
