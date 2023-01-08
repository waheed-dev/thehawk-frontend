
import DownHeader from '@/components/common/DownHeader'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Topbar from '@/components/home/Topbar'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Layout({ Seo, children }) {
  const router = useRouter()
  const handelChangeAds = () => {
    const AvailableAdds = document.getElementsByClassName("adsbygoogle");

    for (var index = 0; index < AvailableAdds.length; index++) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-9084918379047887",
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    handelChangeAds()

  }, []);
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
