import React from 'react'
import Navbar from './Navbar/Navbar'
import HomeSectionOne from './HomeSectionOne/HomeSectionOne'
import HomeSectionTwo from './HomeSectionTwo/HomeSectionTwo'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HomeSectionOne />
        <HomeSectionTwo/>
    </div>
  )
}

export default HomePage