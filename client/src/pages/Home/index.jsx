import React from 'react'
import "./index.scss"
import Navbar from '../../layout/Navbar'
import Header from '../../components/Header'
import Courses from '../../components/Courses'
import SearchCourse from '../../components/SearchCourse'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Courses/>
        <SearchCourse/>
    </div>
  )
}

export default Home