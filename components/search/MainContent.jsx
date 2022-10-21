import React from 'react'
import InnerSidebar from '../common/InnerSidebar'

import SearchResult from './SearchResult'

export default function MainContent({ postData }) {
  return (
    <>
          <div class="main-content container">
              <div class="col-md-8 blog-single">
                  <div class="bs-meta">
                      <span class="bs-cat">Search Result</span>
                  </div>

                  <div class="space30"></div>
          <SearchResult postData={postData} />
              </div>
{/* <InnerSidebar/> */}
          </div>
    </>
  )
}
