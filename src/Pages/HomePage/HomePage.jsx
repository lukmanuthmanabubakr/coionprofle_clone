import React from 'react'
import Navbar from './Navbar/Navbar'
import HomeSectionOne from './HomeSectionOne/HomeSectionOne'
import HomeSectionTwo from './HomeSectionTwo/HomeSectionTwo'
import HomeSectionThree from './HomeSectionThree/HomeSectionThree'

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HomeSectionOne />
        <HomeSectionTwo/>
        <HomeSectionThree/>
    </div>
  )
}

export default HomePage