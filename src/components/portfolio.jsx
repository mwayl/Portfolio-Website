import React,{useEffect,useState}  from 'react';
import "./style/portfolio.scss";

import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DefaultPlayer as Video } from 'react-html5video';

import attendence_app from './videos/attendence app.mp4';
import recipe_app from './videos/update recipe app fast.mp4';
import blooging_app from './videos/update crud login signup react router auth guard1.mp4' 
import attendence_pic from './assests/attendence.PNG'
import blogging_app_pic from './assests/blogging app.PNG'
import recipe_app_pic from './assests/recipe app.PNG' 


const Portfolio = () => {
    const [videoWidth, setVideoWidth] = useState("310px");
    const [videoHeight, setVideoHeight] = useState("170px");

    useEffect(() => {
        function handleResize() {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 384) {
                setVideoWidth("100%");
                setVideoHeight("auto"); // Adjust height dynamically based on width
            } else {
                setVideoWidth("310px");
                setVideoHeight("170px");
            }
        }

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize); // Event listener for window resize
        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);



    AOS.init({
        offset:250,
        duration:1000
    });
    
   


   return(
    <div className="main-portfolio" id='portfolio'>
        <Helmet>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</Helmet>
        <div className='portfolio-container'>
        <h1 className='project-heading'>PROJECT</h1>
        <div className='project'>
        <div className='project-link' data-aos="fade-right">

        <Video autoPlay loop className='images video-element'  poster={blogging_app_pic} controls={false} width={videoWidth} height={videoHeight}>
                    <source src={blooging_app} type='video/webm'/></Video>
            <div className='aboutProject' >
                <h3 className='heading-project-description'>Blog Posting System</h3>
                <p className='paragraph-project-description'>
                    This Faboulous System post the user thought&nbsp; and creativity for all world&nbsp; without any
                     interruption in this we used React.js, Express.Js, Restful-API's and many other library. This project
                     is very useful to me and enhance my skills very much.
                   
                </p>

            </div>
            <div className='button-div'>
                <button className='button'><a href='https://www.linkedin.com/in/m-wayl-uddin-489628266/recent-activity/all/' target='_blank'>View</a></button>
                <button className='button'><a href='https://github.com/mwayl/Attendence-App' target='_blank'>Source</a></button>
            </div>
            
            </div>
            {/* <img src={attendence} className='images'></img> */}
            <div className='project-link' data-aos="fade-up">
                <Video autoPlay loop poster={attendence_pic} className='images video-element' controls={false} width={videoWidth} height={videoHeight}>
                    <source src={attendence_app} type='video/webm'/></Video>
            <div className='aboutProject'>
                <h3 className='heading-project-description'>Attendence Management System</h3>
                <p className='paragraph-project-description'>
                    This Faboulous System Automated our&nbsp; Institute Attendence System and Students are easily Mark Attendance&nbsp; without
                    &nbsp;doing&nbsp; cheating and check our&nbsp; past&nbsp; records and also&nbsp; admin can maintain and check the record of Student.
                </p>

            </div>
            <div className='button-div'>
                <button className='button'><a href='https://www.linkedin.com/in/m-wayl-uddin-489628266/recent-activity/all/' target='_blank'>View</a></button>
                <button className='button'><a href='https://github.com/mwayl/Crud-using-MERN' target='_blank'>Source</a></button>
            </div>
            
            </div>

            <div className='project-link' id='last-project-link' data-aos="fade-left">
            <Video autoPlay loop className='images video-element' controls={false} width={videoWidth} height={videoHeight} poster={recipe_app_pic}>
                    <source src={recipe_app} type='video/webm'/></Video>
            <div className='aboutProject'>
                <h3 className='heading-project-description'>Recipe App System</h3>
                <p className='paragraph-project-description'>
                "I successfully created a Recipe App using HTML and CSS JavaScript. In this i fetch the recipe detail from JSON file.
                In this app you search many yummy yummy dishes and enjoy it from with your family and guest. Just try it and give feedback.
                </p>

            </div>
            <div className='button-div'>
                <button className='button'><a href='https://fantastic-biscotti-d4462e.netlify.app/' target="_blank">View</a></button>
                <button className='button'><a href='https://github.com/mwayl/RecipeApp' target="_blank">Source</a></button>
            </div>
            
            </div>
          
        </div>
    </div>
    </div>
   )

}

export default Portfolio;