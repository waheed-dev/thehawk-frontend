import React from 'react'

export default function MostRecomended() {
  return (
    <>
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
    </>
  )
}
