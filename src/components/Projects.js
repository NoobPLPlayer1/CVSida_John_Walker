import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'


const AddProjects = () => { window["addProjectViews"](document.getElementById('project_list'), document.getElementById('projects')) };
const HidePopup = () => { window["Hide"]('popup_window'); window["Hide"]('projects') };

const Projects = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch('https://api.github.com/users/NoobPLPlayer1/repos');
            const json = await response.json();
            setProjects(json);
        }
        getProjects();
    }, [])

    useEffect(() => {
        AddProjects();
    }, [])

    return (
        <div >
            <div className="grid" >
                <div id="projects" className="overlay">
                </div>
                <div className="popup" id="popup_window">
                    <div className="close button" onClick={HidePopup}>&times;</div>
                    <div id="project_view" className="popup-content">

                    </div>
                </div>
                <div id="project_list" className="grid_item">
                {
                    projects.map((item) => {
                        const {id, name, html_url} = item; 
                        return <div className="box" key={id}>
                            <h1>{name}</h1>
                            <a href={html_url}>Link</a>
                        </div>; 
                        })
                }
                </div>
                <div className="grid_item">
                    <div className="box unimportant"> 
                        <h2>Utbildningar</h2>
                        <ul id="edu"></ul>
                    </div>
                    <div className="box unimportant"> 
                        <h2>Språk</h2>
                        <ul id="lang"></ul>
                    </div>
                </div>
            </div>
            <Contact printOnly={true} />
        </div>
    )
}

export default Projects