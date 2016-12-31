import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer variant1">
        <div className="container">
          <div className="under-footer">
            <a href="#"><img src="images/banners/footer-banner.jpg" alt="Footer Banner" className="img-responsive"/></a>
          </div>
          <div className="footer-bot">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-logo">
                    <a href="index.html"><img src="images/logo-footer-small.png" alt="Footer Logo"/></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-social"> <a href="#" data-tooltip="Facebook"><i className="icon icon-facebook-logo icon-circled"></i></a>
                    <a href="#" data-tooltip="Twitter"><i className="icon icon-twitter-logo icon-circled"></i></a>
                    <a href="#" data-tooltip="Skype"><i className="icon icon-skype-logo icon-circled"></i></a>
                    <a href="#" data-tooltip="Vimeo"><i className="icon icon-vimeo icon-circled"></i></a>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-payment-link">
                    <a href="#"><img src="images/payment-logo/icon-pay-1.png" alt=""/></a>
                    <a href="#"><img src="images/payment-logo/icon-pay-2.png" alt=""/></a>
                    <a href="#"><img src="images/payment-logo/icon-pay-3.png" alt=""/></a>
                    <a href="#"><img src="images/payment-logo/icon-pay-4.png" alt=""/></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="after-footer">
            <div className="footer-copyright text-center"> © 2016 Demo Store. All Rights Reserved. </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
