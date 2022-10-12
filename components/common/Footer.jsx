import React from 'react'
import GelleryIndex from './GalleryIndex'
import FooterFixed from './FooterFixed'
import MostRecomended from './MostRecomended'
import FooterContactDetails from './FooterContactDetails'
/* eslint-disable react/no-unescaped-entities */
export default function Footer() {
  return (
    <>

          <footer className="container">
         
<FooterContactDetails/>
           <MostRecomended/>

              <GelleryIndex/>
          </footer>
          <FooterFixed/>
    </>
  )
}
