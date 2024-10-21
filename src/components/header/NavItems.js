import React, { useState } from "react"

import { 
    NavContainer,
    NavItem,
    NavWrapper
} from './Header.styled';
import { TABS } from '../constants';

const NavItems = ({className, onClose = null}) => {
    const [currentSection, setCurrentSection] = useState('home');
    const clickHandler = (tab) => {
        setCurrentSection(tab);
        if(onClose) {
            onClose();
        }
    }

    return (
        <NavContainer className={className}>
            {TABS.map((tab, index)=>(
                <NavWrapper tabindex="0" key={tab.name} selected={currentSection === tab.link}>
                    <NavItem aria-label={tab.link} href={`#${tab.link}`} onClick={()=>{clickHandler(tab.link)}}>{tab.name}</NavItem>
                </NavWrapper>
            ))}
        </NavContainer>
    )
}

export default NavItems;
