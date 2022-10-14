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
                          <li>
                              <Link href={url.home}>
                                  <a >Home</a>
                              </Link>
                          </li>
                          <li>
                              <Link href={url.policy}>
                                  <a >Privacy Policy</a>
                              </Link> 
                             
                          </li>
                          <li>
                              <Link href={url.conatct}>
                                  <a >Contact Us</a>
                              </Link>
                           
                          </li>

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
