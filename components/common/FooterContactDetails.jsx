import Link from 'next/link'
import React from 'react'
import url from '@/config/url'
/* eslint-disable react/no-unescaped-entities */
export default function FooterContactDetails() {
  return (
    <>
          <div className="col-md-4 footer-widget footer-logo">
              <h3>Thehawk</h3>
              <br />
              <p>
                  <b>Our Office</b><br />
          New The Hawk E-63, Industrial Area, Bahadrabad Haridwar (Uttarakhand) 249 402
              </p>
        <span className="copy">Copyright &copy; <Link href={url.home}><a >Thehawk</a>
        </Link>  </span>
          </div>
    </>
  )
}
