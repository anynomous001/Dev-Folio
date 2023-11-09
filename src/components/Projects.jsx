import React from 'react'
import './Projects.css'
import { ProjectData } from './ProjectData'
import project from '../assets/project.jpg'
import OnScroll from '../components/OnScroll'


const Projects = () => {
    const data = ProjectData.map((item) => {
        return (
            <OnScroll>

                <div key={Math.random()} className='projectcard'>
                    <img src={project} alt='Project-photo' />
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