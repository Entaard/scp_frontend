import React, {Component} from 'react'
import Navbar from '../../components/admin/Navigation'
import TrainedImage from '../../components/admin/TrainedImage'
import Pagination from '../../components/Pagination'

let items = []
for (let i = 0; i < 15; i++) {
  items.push({id: i, image: '', name: `image ${i}`});
}
export class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0
    }
    this.onPageChange = this.onPageChange.bind(this)
  }

  componentDidMount() {
    // alert(this.props.params.id)
  }

  onPageChange(page) {
    this.setState(state => {
      state.currentPage = page.selected
    }, () => {
      // this.callApi(this.state.currentPage)
    })
  }

  renderImages() {
    return (
      items.map((item, index) => (
        <TrainedImage
          key={item.id}
          name={item.name}
        />
      ))
    )
  }

  render() {
    return (
      <div className="open-panel">
        <div id="wrapper">
          <div className="page-wrapper">
            <Navbar/>
            <div className="page-main">
              <div className="container">
                <div className="page-title">
                  <div className="title center">
                    <h1>SOME PRODUCT NAME</h1>
                  </div>
                  <div className="text-wrapper">
                    <p className="text-center">Something description here
                      <br/>simple, its make our design look so awesome</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-4">
                    <div className="blog-post">
                      <div className="main-image">
                        <img src="/images/products/large/product-gallery-1.jpg"
                             className="zoom"
                             alt=""
                             data-zoom-image="images/products/large/product-gallery-1.jpg"/>
                        <a href="http://www.youtube.com/watch?v=qZeeMm35LXo"
                           className="video-link"><i className="icon icon-film"></i></a>
                        <a href="/images/products/large/product-gallery-1.jpg"
                           className="zoom-link"><i className="icon icon-zoomin"></i></a>
                      </div>

                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="sideblock half">
                      <h2>Meta</h2>
                      <ul className="simple-list">
                        <li><a >Created: dd/mm/yy</a></li>
                        <li><a >By: Minh Khoi</a></li>
                        <li><a >Edited: dd/mm/yy</a></li>
                        <li><a >By: Minh Khoi</a></li>
                      </ul>
                    </div>
                    <div className="sideblock half">
                      <h2>Status: Finished</h2>
                      <ul className="simple-list">
                        <li>
                          <button className="btn">Edit</button>
                        </li>
                        {/*<li><a >Unfinished</a></li>*/}
                        {/*<li><button className="btn">Continue</button></li>*/}
                      </ul>
                    </div>
                    <div className="sideblock half">
                      <h2>Concepts</h2>
                      <ul className="tags">
                        <li className="active"><a ><span className="value"><span>Dresses</span></span></a></li>
                        <li><a><span className="value"><span>Outerwear</span></span></a></li>
                        <li><a><span className="value"><span>Tops</span></span></a></li>
                        <li><a><span className="value"><span>Sleeveless tops</span></span></a></li>
                        <li><a><span className="value"><span>Sweaters</span></span></a></li>
                      </ul>
                    </div>
                    <div className="sideblock half">
                      <h2>Category</h2>
                      <ul className="simple-list">
                        <li><a >Fedora</a></li>
                      </ul>
                    </div>
                  </div>

                  <div className="row col-md-11 col-lg-11">
                    <div className="row title">
                      <h2 className="custom-color">Uploaded images
                        <a className="btn pull-right">Edit</a>
                      </h2>
                    </div>
                    {this.renderImages()}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    {/*<ul className="pagination pull-right">*/}
                      {/*<li><a ><i className="icon icon-angle-left"></i></a></li>*/}
                      {/*<li className="active"><a >1</a></li>*/}
                      {/*<li><a >2</a></li>*/}
                      {/*<li><a >3</a></li>*/}
                      {/*<li><a >4</a></li>*/}
                      {/*<li><a >5</a></li>*/}
                      {/*<li><a ><i className="icon icon-angle-right"></i></a></li>*/}
                    {/*</ul>*/}
                    <Pagination
                      currentPage={this.state.currentPage}
                      pageCount={10}
                      onPageChange={this.onPageChange}
                    />
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
