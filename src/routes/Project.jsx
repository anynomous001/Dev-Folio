import React from 'react'
import Navbar from '../components/Navbar'
import Hero2 from '../components/Hero2'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import video1 from '../assets/video1.mp4'


const Project = () => {


    return (
        <div >
            <Navbar />
            <Hero2
                video={video1}
                headline={"My Projects."}
                text={'"Every line of code is a step in the journey of continuous improvement."'}
            />
            <div className='headline-div'>
                <h1 className='project-headline' >My Projects</h1>
                <h4 className='sub-headline'>"Programming is thinking, not just typing."</h4>
            </div>
            <Projects />
            <Footer />
        </div>
    )
}

export default Project 