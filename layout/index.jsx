
import DownHeader from '@/components/common/DownHeader'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/home/Topbar'
import React from 'react'

export default function Layout({Seo , children}) {
  return (
    <>
      <Topbar/>
          <div className="container wrapper">
              
              <Header />
              
        <DownHeader />
    
              {children}
<Footer/>
          </div>
              
  
    </>
  )
}
