import React, { Component } from 'react'
import { updateSwiper } from '../utils/ViewUtils'

export class Swiper extends Component {
  componentDidMount() {
    updateSwiper()
  }

  render() {
    return (
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
    )
  }
}

export default Swiper;
