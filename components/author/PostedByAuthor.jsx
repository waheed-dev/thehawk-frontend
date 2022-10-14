import React from 'react'

export default function PostedByAuthor({ postData, author }) {
    const titleLength = 52
    return (
        <>
            {
                postData.length > 0 ? <>
                    <div class="related-posts related-posts-cat">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h5>{author?.professionalName}'s Posts <span>({postData.length}) <i class="fa fa-angle-down"></i></span></h5>
                        <ul>
                            {
                                postData.map((post) => (
                                    <>
                                        <li>
                                            <div class="col-md-3">
                                                <div class="rp-date">
                                                    <span>November</span>
                                                    04
                                                    <span><em>/</em> 2014</span>
                                                </div>
                                            </div>
                                            <div class="col-md-9">
                                                <img src={post.img.replace('/upload/', '/upload/w_270,h_180/')} class="img-responsive" alt={post.imgAlt} />
                                                <div class="rp-inner">
                                                    <span class="rp-cat">{post.category.name}</span>
                                                    <h4><a href="./single_post.html">
                                                        {
                                                            post.postitle.length > titleLength ?
                                                                <>
                                                                    {

                                                                        post.postitle
                                                                            .substr(0, titleLength)
                                                                            .substr(
                                                                                0,
                                                                                Math.min(
                                                                                    post.postitle.length,
                                                                                    post.postitle.lastIndexOf(' ')
                                                                                )
                                                                            ) + ' ...'

                                                                    }
                                                                </> : post.postitle
                                                        }
                                                    </a></h4>
                                                    <a href="#" class="rp-more">Read more  <em>&#8594;</em></a>
                                                </div>
                                            </div>
                                        </li>
                                    </>
                                ))
                            }


                        </ul>
                    </div>
                </> : ''
            }

        </>
    )
}
