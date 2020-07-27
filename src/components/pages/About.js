import React from "react";
//import coverImage from '../../assets/images/coverImage.jpg';
import profilePicture from '../../assets/images/profilePicture.jpg';

function About() {
    return (
        <section className="about-section">
            {/* <h1 id="about">Anisha Sinha</h1>
            <img src={coverImage} className="hero"  alt="cover" /> */}

            <div className="row">
                <h1 id = "section-title">About me</h1>
                <div className="profile-picture">
                    <img src={profilePicture} className="profile-picture" alt="anishasnet" />
                </div>

                <div className="bio">
                    <h4>About me</h4>
                    <p>
                    Anisha Sinha is a student at Purdue University studing Computer Science pursuing a B.S. She is expected to graduate in 2023. 
                    She graduated Monta Vista High School in Cupertino, CA in 2019. In her free time, Anisha likes hiking and spending time with friends. 
                    </p>
                </div>
            </div>
        </section>
    )
}
export default About;