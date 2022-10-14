import React from 'react'

export default function AuthorInfo({ author }) {
  return (
    <>
          <div class="contributor-info">
        <img loading='lazy' src={author?.avatar ? author?.avatar : 'https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.jpg' } alt="" />
        <h6>
          {
            author.professionalName
          }
              </h6>
              <div class="sep1"></div>
              <div class="space10"></div>
        <p>
          {
            author.bio
          }
              </p>
              <div class="space30"></div>
              <div class="sep1"></div>
              <div class="space20"></div>
        <em class="share-count">Connect with {author.name}</em>
              <span class="bsa-social">
          <a href={author.socilaLinks?.facebook}><i class="fa fa-facebook"></i></a>
          <a href={author.socilaLinks?.twitter}><i class="fa fa-twitter"></i></a>

          <a href={author.socilaLinks?.linkedIn}><i class="fa fa-linkedin"></i></a>

              </span>
          </div>
    </>
  )
}
