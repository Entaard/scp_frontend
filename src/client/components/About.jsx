import React, {Component} from 'react'

export class About extends Component {
  render() {
    return (
        <div className="page-main">
          <div className="block">
            <div className="container">
              <div className="title center">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
          <div className="block fullboxed">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <img src="/images/logo-big.png"
                       alt
                       className="img-responsive"/>
                </div>
                <div className="col-sm-6">
                  <div className="text-wrapper text-lg">
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
                      born and I will give you a complete account of the system, and expound the actual teachings of the
                      great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or
                      avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are extremely painful.</p>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in which toil and pain can procure him some
                      great pleasure. To take a trivial example, which of us ever undertakes laborious physical
                      exercise, except to obtain some advantage from it? But who has any right to find fault with a man
                      who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that
                      produces no resultant pleasure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block">
            <div className="container">
              <div className="title center">
                <h2>Meet Our Team</h2>
              </div>
              <div className="row">
                <div className="col-sm-4">
                  <div className="person">
                    <div className="person-photo">
                      <img src="/images/person/person-01.jpg"
                           alt=""/>
                    </div>
                    <div className="person-info">
                      <h3 className="person-name">Minh Khoi</h3>
                      <div className="person-subname">- Member</div>
                      <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
                        choice is untrammelled</p>
                      <div className="person-links">
                        <a href="#"><i className="icon icon-twitter-logo"></i></a>
                        <a href="#"><i className="icon icon-facebook-logo"></i></a>
                        <a href="#"><i className="icon icon-skype-logo"></i></a>
                        <a href="#"><i className="icon icon-close-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="person">
                    <div className="person-photo">
                      <img src="/images/person/person-02.jpg"
                           alt=""/>
                    </div>
                    <div className="person-info">
                      <h3 className="person-name">Huy Quan</h3>
                      <div className="person-subname">- Team Leader</div>
                      <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
                        choice is untrammelled</p>
                      <div className="person-links">
                        <a href="#"><i className="icon icon-twitter-logo"></i></a>
                        <a href="#"><i className="icon icon-facebook-logo"></i></a>
                        <a href="#"><i className="icon icon-skype-logo"></i></a>
                        <a href="#"><i className="icon icon-close-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="person">
                    <div className="person-photo">
                      <img src="/images/person/person-03.jpg"
                           alt=""/>
                    </div>
                    <div className="person-info">
                      <h3 className="person-name">Duc Loc</h3>
                      <div className="person-subname">- Member</div>
                      <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of
                        choice is untrammelled</p>
                      <div className="person-links">
                        <a href="#"><i className="icon icon-twitter-logo"></i></a>
                        <a href="#"><i className="icon icon-facebook-logo"></i></a>
                        <a href="#"><i className="icon icon-skype-logo"></i></a>
                        <a href="#"><i className="icon icon-close-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block bg white">
            <div className="container">
              <div className="title center">
                <h2>Partners</h2>
              </div>
              <div className="brand-grid">
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-01.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-02.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-03.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-04.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-05.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-06.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-07.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-08.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-09.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-10.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-11.png"
                                               alt="Brand Logo"/></a>
                <a href="#"
                   className="brand-item"><img src="/images/brands/brand-square-12.png"
                                               alt="Brand Logo"/></a>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
export default About;

  