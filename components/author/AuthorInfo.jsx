import React from 'react'

export default function AuthorInfo({ author }) {
  return (
    <>
      <div className="contributor-info">
        <img loading='lazy' src={author?.avatar ? author?.avatar : 'https://res.cloudinary.com/thehawk/image/upload/w_79,h_79/v1647778416/etg05xddcvjn1hacsuyz.jpg'} alt="" />
        <h6>
          {
            author.professionalName
          }
        </h6>
        <div className="sep1"></div>
        <div className="space10"></div>
        <p>
          {
            author.bio
          }
        </p>
        <div className="space30"></div>
        <div className="sep1"></div>
        <div className="space20"></div>
        <em className="share-count">Connect with {author.name}</em>
        <span className="bsa-social">
          <a href={author.socilaLinks?.facebook}><i className="fa fa-facebook"></i></a>
          <a href={author.socilaLinks?.twitter}><i className="fa fa-twitter"></i></a>

          <a href={author.socilaLinks?.linkedIn}><i className="fa fa-linkedin"></i></a>

        </span>
      </div>
    </>
  )
}
