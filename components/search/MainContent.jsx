import React from 'react'
import InnerSidebar from '../common/InnerSidebar'

import SearchResult from './SearchResult'

export default function MainContent({ postData }) {
  return (
    <>
      <div className="main-content container">
        <div className="col-md-8 blog-single">
          <div className="bs-meta">
            <span className="bs-cat">Search Result</span>
          </div>

          <div className="space30"></div>
          <SearchResult postData={postData} />
        </div>
        {/* <InnerSidebar/> */}
      </div>
    </>
  )
}
