import url from '@/config/url';
import Link from 'next/link';
import React from 'react'

export default function FooterFixed() {
  return (
    <>
          <div className="footer-fixed">
              <div className="row">
                  <div className="col-md-6">
                      <ul className="footer-nav">
                          <li><a href="#">Home</a></li>
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">Archives</a></li>
                          <li><a href="#">Contributors</a></li>
                      </ul>
                  </div>
                  <div className="col-md-6">
                      <p className="copy1">Copyright &copy; <Link href={url.home}>
                          <a>
                              thehawk.in
                          </a>
                      </Link> <a onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                      }} className="fa fa-arrow-up"></a></p>
                  </div>
              </div>
          </div>
    </>
  )
}
