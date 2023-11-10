import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
//import Skills from '../components/skills'
import { PiHandWaving } from 'react-icons/pi'
import profile from '../assets/profile.jpg'
import OnScroll from '../components/OnScroll'

const About = () => {
    return (
        <div className='aboutHero-div-container'>
            <Navbar />

            <div className='aboutHero-div'>
                <div className='intro-div'>
                    <span className='opener-tag'><PiHandWaving className='waving' />Hi, I'm Pritam Chakroborty</span>
                    <h2 className='greetings'>Nice to meet you !</h2>
                </div>
            </div>

            <div className='about-content-container'>

                <div className='about-img-content'>

                    <img className='about-img' src={profile} />
                </div>

                <div className='about-content'>

                    <p>I’m a Frontend Developer from Kolkata (India).
                        I completed Frontend Carrer Path from Scrimba. </p>


                    <OnScroll>
                        <p> I learned my craft by working on side projects with friends and guidance from great mentors.
                            In my free time, I get my hopes up for the Dallas Mavericks or Cowboys winning a championship
                            and drink sweet tea. I’m currently learning 3D design, reading about tech history, and logging
                            my favorite movies.</p>

                    </OnScroll>
                    <OnScroll>

                        <p> I'm inspired by people who seek happiness and create joy for others.
                            If that sounds like you, let's grab some chai.</p>
                    </OnScroll>
                </div>


            </div>
            {/*<Skills />*/}
            <Footer />
        </div >
    )
}

export default About 