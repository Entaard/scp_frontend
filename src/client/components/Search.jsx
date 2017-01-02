import React, {Component} from 'react'

export class HeaderSearch extends Component {
  render() {
    return(
      <div className="header-link header-search header-search">
        <div className="exp-search">
          <form>
            <input className="exp-search-input " placeholder="Search here ..." type="text" />
            <input className="exp-search-submit" type="submit" value=""/>
            <span className="exp-icon-search"><i className="icon icon-magnify"></i></span>
            <span className="exp-search-close"><i className="icon icon-close"></i></span>
          </form>
        </div>
      </div>
    )
  }
}

export default HeaderSearch;