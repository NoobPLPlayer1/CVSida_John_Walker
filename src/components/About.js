import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'

const About = () => {

    return (
        <div className="grid">
            <div id="funny2"></div>
            <div className="grid_item">
            </div>
            <div className="grid_item">
            <Contact printOnly={false} />
            </div>
        </div>
    )
}

export default About