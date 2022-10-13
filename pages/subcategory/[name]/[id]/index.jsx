import MainContent from '@/components/subCategory/MainContent'
import SubCategorySidebar from '@/components/subCategory/SubCategorySidebar'
import Layout from '@/layout/index'
import React from 'react'

export default function index() {
  return (
    <>
      <Layout>
        <div class="main-content container">

          <MainContent />

          <SubCategorySidebar />
        </div>
      </Layout>
    </>
  )
}
