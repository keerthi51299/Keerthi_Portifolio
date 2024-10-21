import React from "react";

import {
    CenterAlign,
    IconButtonStyle,
    SideNavContainer,
    SideNavHeader
} from './Header.styled';

import CloseIcon from '../icons/CloseIcon';

import NavItems from "./NavItems";

const SideNav = ({onClose}) => {
    return (
        <SideNavContainer>
            <SideNavHeader>
                <CenterAlign>
                    <h2 aria-label="Keerthi" style={{fontWeight: 400, color: '#C5832B'}}>Keerthi</h2>
                </CenterAlign>
                <CenterAlign>
                    <IconButtonStyle onClick={onClose}>
                        <CloseIcon fill={'#FFFFFF'} width={20} height={20} />
                    </IconButtonStyle>
                </CenterAlign>
            </SideNavHeader>
            <NavItems onClose={onClose} />
        </SideNavContainer>
    )
}

export default SideNav;
