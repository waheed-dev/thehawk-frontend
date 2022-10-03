import React from 'react'

export default function Topbar() {
  return (
    <>
          <div class="top-bar container">
              <div class="row">
                  <div class="col-md-6">
                      <ul class="tb-left">
                          <li class="tbl-date">Today is: <span>Tuesday, November 4, 2014</span></li>
                          <li class="tbl-temp"><i class="fa fa-sun-o"></i>32 C</li>
                      </ul>
                  </div>
                  <div class="col-md-6">
                      <ul class="tb-right">
                          <li class="tbr-social">
                              <span>
                                  <a href="#" class="fa fa-facebook"></a>
                                  <a href="#" class="fa fa-twitter"></a>
                                  <a href="#" class="fa fa-google-plus"></a>
                                  <a href="#" class="fa fa-pinterest"></a>
                                  <a href="#" class="fa fa-youtube"></a>
                                  <a href="#" class="fa fa-rss"></a>
                              </span>
                          </li>
                         
                      </ul>
                  </div>
              </div>
          </div>
    </>
  )
}
