import React from 'react'
import './Technologies.css'
import { ProjectData } from './ProjectData'
import project_one from '../assets/project_one.jpeg'
import project_two from '../assets/project_two.jpeg'
import project_three from '../assets/project_three.jpeg'
import { BsGithub } from 'react-icons/bs'
import { SiFirebase, SiReactrouter, SiTypescript, SiTailwindcss } from 'react-icons/si'
import {
    FaLinkedinIn,
    FaCode,
    FaGitAlt,
    FaReact, FaHtml5, FaCss3, FaJsSquare,
} from 'react-icons/fa'

const Technologies = () => {

    return (
        <div className='home-skills-container'>
            <h1 className='home-project-header'>Some of my Projects</h1>
            <div className='home-projects-container'>
                <div className='flex-div'>
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={project_one} alt='Project-photo' />
                        <h4>Endorment Application
                        </h4>
                        <p>Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.</p>
                        <div>
                            <a href='https://github.com/anynomous001/Endorsement-App' className='view' >View</a>
                            <a href='https://anynomous001.github.io/Endorsement-App/' className='source'>source</a>
                        </div>
                    </div >
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={project_two} alt='Project-photo' />
                        <h4>Endorment Application
                        </h4>
                        <p>Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.</p>
                        <div>
                            <a href='https://github.com/anynomous001/Endorsement-App' className='view' >View</a>
                            <a href='https://anynomous001.github.io/Endorsement-App/' className='source'>source</a>
                        </div>
                    </div >
                    <div key={Math.random()} className='projectcard'>
                        <img className='home_project_pic' src={project_three} alt='Project-photo' />
                        <h4>Endorment Application
                        </h4>
                        <p>Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build. Only files inside the `public` folder can be referenced from the HTML.</p>
                        <div>
                            <a href='https://github.com/anynomous001/Endorsement-App' className='view' >View</a>
                            <a href='https://anynomous001.github.io/Endorsement-App/' className='source'>source</a>
                        </div>
                    </div >
                </div>
            </div>

            <div className='mid-heading-div'>

                <h1 className='home-skills-headline'>My TechStack</h1>
                <p className='home-skills-subheadline'></p>
            </div>

            <div className='skill-div'>
                <div className='first-row'><  FaCss3 className='skill-icon' />
                    <p>HTML</p>
                </div>
                <div className='first-row'><   FaJsSquare className='skill-icon' />
                    <p>JavaScript </p>
                </div>
                <div className='second-row'><  FaReact className='skill-icon' />
                    <p>React </p>
                </div>
                <div className='second-row'><FaGitAlt className='skill-icon' />
                    <p>Git </p>
                </div>
                <div className='second-row'>< BsGithub className='skill-icon' />
                    <p>Github </p>
                </div>
                <div className='second-row'>< SiFirebase className='skill-icon' />
                    <p>FireBase </p>
                </div>
                <div className='third-row'><  SiReactrouter className='skill-icon' />
                    <p>React Router </p>
                </div>
                <div className='third-row'><  SiTypescript className='skill-icon' />
                    <p>TypeScript </p>
                </div>
                <div className='third-row'><   SiTailwindcss className='skill-icon' />
                    <p>TalWind </p>
                </div>
            </div>
        </div>
    )
}

export default Technologies