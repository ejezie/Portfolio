import React from 'react'
import Title from "../components/Title"
import AboutSection from "../components/AboutSection"

function About() {
    return (
        <div className="about">
            <Title title={'About Me'} span={'About me'}/>
            hello world
            <AboutSection/>
        </div>
    )
}

export default About
