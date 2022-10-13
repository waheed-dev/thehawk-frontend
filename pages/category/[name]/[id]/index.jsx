import CategorySideBar from '@/components/category/CategorySideBar'
import MainContent from '@/components/category/MainContent'
import Layout from '@/layout/index'
import React from 'react'
/* eslint-disable react/no-unescaped-entities */
export default function index() {
  return (
    <>
      <Layout>
        <div class="main-content container">

      <MainContent/>

<CategorySideBar/>
        </div>
      </Layout>
    </>
  )
}
