import React from 'react'
import Homeitem from '../components/Homeitem'
import Productswithoutnav from './Productswithoutnav'
import BlogSection from './BlogSection'




const Home = () => {
  return (
    <div>
     <Homeitem/>
     <Productswithoutnav/>
     <BlogSection/>
    </div>
  )
}

export default Home
