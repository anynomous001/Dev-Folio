import React from 'react'
import { Link } from 'react-router-dom'
import './HomeHeroDivStyle.css'
import { BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import resume from "../assets/Pritam'sresume.pdf"
import {
    FaLinkedinIn,
    FaCode
} from 'react-icons/fa'

const HomeHeroDiv = () => {
    return (
        <div className='homeHero-div'>
            <div>
                <span className='small-tag'>Hi, I'm Pritam <FaCode className='facode' /></span>
                <h2>A <span className='visbyfont'>Frontend Developer</span> with a passion of  coding,
                    design and bringing ideas to
                    life. <span className='oneliner'> One line of code at a time.</span></h2>

                <div className='btn-container'>
                    <a className='btn' href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    <Link className='round-btn github' to='https://github.com/anynomous001 '><BsGithub className='github-icon' /></Link>
                    <Link className='round-btn github' to='https://www.linkedin.com/in/pritamchakroborty/'><FaLinkedinIn className='github-icon' /></Link>
                    <Link className='round-btn github' to='https://mail.google.com/mail/mu/mp/354/#pr'><MdEmail className='github-icon' /></Link>
                </div>
            </div>
        </div>
    )
}

export default HomeHeroDiv