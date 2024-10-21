import React from 'react';

import { AboutContainer, AboutInfo, AboutText, ImageContainer } from './About.styled';

const About = () => {
    return (
        <div id="about" style={{paddingTop: '60px'}}>
        <AboutContainer>
            <ImageContainer></ImageContainer>
            <AboutInfo>
                <AboutText className='heading'>
                    About me
                </AboutText>
                <div>
                    My name is Keerthi, a passionate Fronted Developer with 4 years of experience in professinoal frontend developmet
                    with a keen eye for creating beautiful, intuitive ad responsive web experiences. <br /> <br /> I specialize in craftig user-friendly
                    iterfaces using the latest technologies like HTML, CSS, Javascript and React. My goal is to bridge the gap between design and
                    fuctionality, bringing ideas to life on the web.
                </div>
            </AboutInfo>
        </AboutContainer>
        </div>
    )
}

export default About;
