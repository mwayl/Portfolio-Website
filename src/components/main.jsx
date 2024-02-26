import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram ,FaTwitter } from 'react-icons/fa';
import profile from "./assests/profile.jpeg";
import {  HashLink as Link} from "react-router-hash-link";


// import footer from "./assests/footer.jsx";
import "./style/main.scss";


function Main() {

    const [char, setChar]=useState("")
    const [blinking, setBlinking]=useState(false)  //kab blinking rokni ha 

    const line ="MERN STACK DEVELOPER"
    var charIndex=1;
    let isDeleting=false;
    const typeEffect=()=>{
        const currentChr = line.substring(0 , charIndex)
        console.log(currentChr)
        setChar(currentChr)
       
        if(!isDeleting && charIndex < line.length){
            charIndex++
            setTimeout(typeEffect,320);
        }
        else if(isDeleting && charIndex > 0){
            charIndex--
            setTimeout(typeEffect,250)
        }
        else{
            isDeleting =!isDeleting
            setBlinking(true)
            setTimeout(typeEffect,5000)
        }
    }

   useEffect(()=>{
    typeEffect();
   },[])


    // FRONT END DEVELOPER & DESIGNER
    return (
        <div className="main" id="main">
        <div className="main-container">
            <div className="right-side">
            <h4 className="gretting">HEY THERE!</h4>
            <h1 className="heading">I AM M.WAYL</h1>
            <h4 className= {`main-line ${blinking ?"stop-blinking" : ""}`}>{char}</h4>
            <div className="link">
            <a href="https://www.facebook.com/profile.php?id=100008355761680"  target="_blank">
                <FaFacebook size={23} />
            </a>
            <a href="https://www.linkedin.com/in/m-wayl-uddin-489628266/" target="_blank">
                <FaLinkedin size={23} />
            </a>
            <a href="https://github.com/mwayl?tab=repositories" target="_blank">
                <FaGithub size={23} />
            </a>
            <a href="#">
                <FaInstagram size={23} />
            </a>
            <a href="#">
                <FaTwitter size={23} />
            </a>
        </div>
        <div className="button-class">
        <button type="button"><Link to="#portfolio" smooth>Projects</Link></button>
            <button type="button" ><Link to="#footer" style={{textDecoration:"none"}} smooth>contact me</Link></button>
        </div>
        </div>
       
            <img src={profile} alt="my_image" className="my_image"></img>
        
    </div>
</div>
    );
}

export default Main;