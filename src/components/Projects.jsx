import React from 'react'
import './Projects.css'
import { ProjectData } from './ProjectData'
import project from '../assets/project_two.jpeg'
import project1 from '../assets/intro.jpg'
import project2 from '../assets/project_one.jpeg'
import project3 from '../assets/project_three.jpeg'
import project4 from '../assets/Demomarketing.jpg'

import OnScroll from '../components/OnScroll'

const images = [project1, project2, project3, project4]

const Projects = () => {
    const data = ProjectData.map((item, index) => {

        return (
            <OnScroll>
                <div key={Math.random()} className='projectcard'>
                    <img src={images[index]} alt='Project-photo' />
                    <h4>{item.name}</h4>
                    <p>{item.about}</p>
                    <div>
                        <a href={item.view} className='view' >View</a>
                        <a href={item.source} className='source'>source</a>
                    </div>
                </div >
            </OnScroll>

        )
    })

    return (

        <div className='pCard-Container'>
            {data}
        </div>
    )
}

export default Projects