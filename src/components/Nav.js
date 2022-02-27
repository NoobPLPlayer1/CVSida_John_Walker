import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <ul>
                <Link to='/CVSida_John_Walker'><li className="menu_button">Hem</li></Link>
                <Link to='/Projects'><li className="menu_button">Portfolio</li></Link>
                <Link to='/About'><li className="menu_button">Kontaktuppgifter</li></Link>
            </ul>
        </nav>
    )
}

export default Nav