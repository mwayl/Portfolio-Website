import React from 'react';
import "./style/about.scss";
import aboutpics from "./assests/aboutpic.PNG";

function About(){
    return(
        <div className="about" id="about">
           <div className='about-container'>
           <div className='photo-div'><img src={aboutpics} alt='Wayl pic' className='pic'></img></div>
            <div className='skills-div'> 
            <h1 className='about-heading'>MUHAMMAD WAYL</h1>
            <ul className='skill-list'>
                <li className='skill'>FRONT-END DEVELOPER</li>
                <li className='skill'>BACK-END DEVELOPER</li>
                <li className='skill'>JAVASCRIPT DEVELOPER</li>
                <li className='skill'>PYTHON</li>
                <li className='skill'>JAVA</li>
                
            </ul>
            </div>
        
           </div>
        </div>
    )
}

export default About;