import React from 'react'
import { NextSeo } from 'next-seo';
export default function Seo({
    title, description , type , url , image
}) {
    return (
       
        // article
        // website
        <NextSeo
            title={title}
            description={description}
            facebook={{
                appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
            }}
            openGraph={{
                type: type ,
                url: url ,
                title: title,
                description: description,
                images: [
                    {
                        url: image,
                        // width: 800,
                        // height: 600,
                        // alt: 'Og Image Alt',
                    },

                ],
            }}
        />
   
  )
}
