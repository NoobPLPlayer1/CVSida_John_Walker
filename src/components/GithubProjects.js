import React, { useState, useEffect } from 'react'

const GithubProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = async () => {
            const response = await fetch('https://api.github.com/users/NoobPLPlayer1/repos');
            console.log(response);
            const json = await response.json();
            setProjects(json);
        }
        getProjects();
    }, [])

    console.log(projects);
    return (
    <div className="grid_item">
        <div className="box unimportant"> 
            <h2>{projects && projects.map(getName => {const {id,name} = getName; return (<p key={id}>{name}</p>)})}</h2>
            <ul></ul>
        </div>
        <div className="box unimportant"> 
            <h2>Språk är gay</h2>
            <ul></ul>
        </div>
    </div>
    )
}

export default GithubProjects