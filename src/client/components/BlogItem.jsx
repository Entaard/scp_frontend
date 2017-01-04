import React, { Component } from 'react'

export class BlogItem extends Component {
  render() {
    return (
      <div>
        <a href="blog.html" className="blog-item-photo">
          <img className="product-image-photo"
               src="images/blog/blog-1.jpg" alt="From Blog"/>
        </a>
        <div className="blog-item-info">
          <a href="blog.html" className="blog-item-title">Inventore consectetur ullam</a>
          <div className="blog-item-teaser">
            Repellat aspernatur esse minus. Molestiae ipsum earum, aspernatur
            fugit veniam ducimus doloremque repellat suscipit. Cumque!
          </div>
          <div className="blog-item-links">
            <span className="pull-left"> <span><a href="#" className="readmore">Read more</a></span> </span>
            <span className="pull-right"> <span>Post by <a href="#">Admin</a></span> </span>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItem;
