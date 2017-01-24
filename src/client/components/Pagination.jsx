import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'

export class Pagination extends Component {
  render() {
    if (this.props.pageCount <= 1) {
      return <div></div>
    }
    return (
      <ReactPaginate
        previousLabel={<i className="icon icon-angle-left"/>}
        nextLabel={<i className="icon icon-angle-right"/>}
        forcePage={this.props.currentPage}
        breakLabel={<a href='#'>...</a>}
        pageCount={this.props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.props.onPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pagination pull-right"}
        activeClassName={"active"}/>
    )
  }
}

export default Pagination;
