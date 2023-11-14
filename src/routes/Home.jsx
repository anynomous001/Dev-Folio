import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Technologies from '../components/Technologies'
import HomeHeroDiv from '../components/HomeHeroDiv'


const Home = () => {
    return (
        <>
            <Navbar />
            <HomeHeroDiv />
            <Technologies />
            <Footer />
        </>
    )
}

export default Home