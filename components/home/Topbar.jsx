import React, { useState } from 'react'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid';
export default function Topbar() {
    const myDate = Date.now()
    const [date, setdate] = useState({
        dateName: moment(myDate).format("dddd"),
        monthName: moment(myDate).format("MMMM"),
        today: moment(myDate).format("D"),
        year: moment(myDate).format("Y")
    })
  return (
    <>
          <div className="top-bar container">
              <div className="row">
                  <div className="col-md-6">
                      <ul className="tb-left">
                          <li key={uuidv4()} className="tbl-date">Today is: <span>{date.dateName}, {date.monthName} {date.today}, { date.year}</span></li>
                          <li key={uuidv4()} className="tbl-temp"><i className="fa fa-sun-o"></i>32 C</li>
                      </ul>
                  </div>
                  <div className="col-md-6">
                      <ul className="tb-right">
                          <li key={uuidv4()} className="tbr-social">
                              <span>
                                  <a href="#" className="fa fa-facebook"></a>
                                  <a href="#" className="fa fa-twitter"></a>
                                  <a href="#" className="fa fa-google-plus"></a>
                                  <a href="#" className="fa fa-pinterest"></a>
                                  <a href="#" className="fa fa-youtube"></a>
                                  <a href="#" className="fa fa-rss"></a>
                              </span>
                          </li>
                         
                      </ul>
                  </div>
              </div>
          </div>
    </>
  )
}
