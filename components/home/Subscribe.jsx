import React from 'react'

export default function Subscribe() {
  return (
    <>
      <div className="side-widget sw-subscribe">
				<h5><span>Subscribe</span></h5>
				<div className="sw-inner">
					<div className="sws-inner">
						<img src="images/aside/8.jpg" alt=""/>
		 {/* eslint-disable-next-line react/no-unescaped-entities */}
						<p>Make sure you don't miss interesting happenings by joining our newsletter program.<br/>We don't do spam.</p>
					</div>
					<div id="newsletter">
						<form className="newsletter">
							<input type="email" placeholder="Enter Your Email Address"/>
						</form>
					</div>
				</div>
			</div>
    </>
  )
}
