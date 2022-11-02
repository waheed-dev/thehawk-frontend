import endpoints from '@/config/endpoints'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {  toast } from 'react-toastify';
export default function Subscribe() {
	const [email, setemail] = useState('')
	const subscribe = async (e) => {
		e.preventDefault()
		try {
			if (!email) {
				return
			}
			await axios.post(endpoints.susbcribe, email)
			toast.success('Subscribed')
		} catch (error) {
			toast.error(error.message)
		}



	}
	return (
		<>
			<div className="side-widget sw-subscribe">
				<h5><span>Subscribe</span></h5>
				<div className="sw-inner">
					<div className="sws-inner">
						<img src="images/aside/8.jpg" alt="" />
						{/* eslint-disable-next-line react/no-unescaped-entities */}
						<p>Make sure you don't miss interesting happenings by joining our newsletter program.<br />We don't do spam.</p>
					</div>
					<div id="newsletter">
						<form onSubmit={subscribe} className="newsletter">
							<input onChange={(e) => {
								setemail(e.target.value)
							}} type="email" placeholder="Enter Your Email Address" value={email} />
							<input style={{
								marginTop: 10
							}} type="submit" value={'Send'} />
						</form>
					</div>
				</div>
			</div>
		</>
	)
}
