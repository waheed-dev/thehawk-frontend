import React from 'react'
import FooterFixed from './FooterFixed'
/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <>

          <footer className="container">
              <div className="col-md-4 footer-widget footer-logo">
                  <h3>Thehawk</h3>
                  <br />
                  <p>
                      <b>Our Office</b><br />
                      D'Monument Building 2nd Floor<br />
                      Freedom Street 109, Sleman 55518<br />
                      Yogyakarta
                  </p>
                  <span className="copy">Copyright &copy; 2014 Gazeta. Web Design by <a href="#">PremiumLayersi</a></span>
              </div>

              <div className="col-md-4 footer-widget p-news">
                  <h5>Most Commented</h5>
                  <ul>
                      <li>
                          <img src="images/aside/1.jpg" alt="" />
                          <div className="pn-info">
                              <span>Politic</span>
                              <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                          </div>
                      </li>
                      <li>
                          <img src="images/aside/2.jpg" alt="" />
                          <div className="pn-info">
                              <span>Politic</span>
                              <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                          </div>
                      </li>
                      <li>
                          <img src="images/aside/3.jpg" alt="" />
                          <div className="pn-info">
                              <span>Business</span>
                              <h4><a href="./single_post.html">Lorem Ipsum Dolor Sit Amet, Consetetuer Adipiscing Elit</a></h4>
                          </div>
                      </li>
                  </ul>
              </div>

              <div className="col-md-4 footer-widget f-gallery">
                  <h5>Gallery Index</h5>
                  <ul>
                      <li><a href="#"><img src="images/aside/2/1.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/2.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/3.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/4.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/5.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/6.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/7.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/8.jpg" className="img-responsive" alt="" /></a></li>
                      <li><a href="#"><img src="images/aside/2/9.jpg" className="img-responsive" alt="" /></a></li>
                  </ul>
              </div>
          </footer>
          <FooterFixed/>
    </>
  )
}
