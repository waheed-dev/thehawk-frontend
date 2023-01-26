import url from '@/config/url'
import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import slugify from 'slugify'
import webp from 'utils/webp'

export default function CommonSectionFetearuedPost({ fetaurePost }) {
  return (
    <>
          <div className="col-md-6">
              <div className="cb-big">
                  <div className="bl-meta">
                     
                  </div>
                  <img loading='lazy' src={fetaurePost.img} className="img-responsive" alt={fetaurePost.imgAlt} style={{
                      minHeight: "450px"
                  }} />
                  <div className="bl-info">
                      <h3>
                          <Link href={url.post.single.replace(':title', slugify(fetaurePost.postitle)).replace(':id', fetaurePost._id)}>
                              <a >{fetaurePost.postitle}</a>     
                          </Link>

                      </h3>
                      <p> {moment(fetaurePost.createdAt).format("MMMM")} {moment(fetaurePost.createdAt).format("D")}, {moment(fetaurePost.createdAt).format("Y")}</p>
                  </div>
              </div>
          </div>
    </>
  )
}
