import React from 'react';

import About from '../about/About';
import Contact from '../contact/Contact';
import Header from '../header/Header';
import Hello from '../hello/Hello';
import Services from '../services/Services';
import Skills from '../skills/Skills';

import { MainContainer } from './Home.styled';

const Home = () => {
    return (
        <div>
            <Header />
            <MainContainer>
                <Hello />
                <About />
                <Services />
                <Skills />
                <Contact />
            </MainContainer>
        </div>
    );
}

export default Home;