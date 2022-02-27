import Contact from './Contact.js'
import image from '../Images/portrait.png'
import React, { useState, useEffect } from 'react'

const AddProjects = () => { window["addProjectViews"](document.getElementById('project_list'), document.getElementById('projects')) }
const HidePopup = () => { window["Hide"]('popup_window'); window["Hide"]('projects') };

const Index = () => {

    useEffect(() => {
        AddProjects();
    }, [])
    return (
        <div className="grid">
            <div id="projects" className="overlay" href="#projects">
            </div>
            <div className="popup" id="popup_window">
                <div className="close button" onClick={HidePopup}>&times;</div>
                <div id="project_view" className="popup-content">

                </div>
            </div>
            <div id="project_list" className="grid_item" >
                
            </div>
            <div className="grid_item priority_item">
                <img onClick={window['Funny1Trigger']} src={image} alt="" id="portrait"></img>
                <div className="box">
                    <p>Jag heter John Walker är 23 år gammal, studerar just nu till <a href="*">System&shy;utvecklare i .NET med AI kompetens</a>. Har hållt på mycket med programmering på fritiden, främst inom grafik programmering med exempelvis SFML, OpenGL och har även började lära mig Vulkan nu i höstas. </p>
                </div>
                <div className="box"> 
                    <h2>Utbildningar</h2>
                    <ul id="edu"></ul>
                </div>
                <div className="box"> 
                    <h2>Språk</h2>
                    <ul id="lang"></ul>
                </div>
            </div>
            <Contact printOnly = {true} />
        </div>
    )
}

export default Index
