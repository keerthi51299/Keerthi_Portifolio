import React, { useState } from 'react';

import Modal from '../Modal';
import NavItems from './NavItems';
import SideNav from './SideNav';

import Lines3Icon from '../icons/Lines3Icon';

import {
    HeaderStyle, 
    HeaderHorizontal,
    IconButtonStyle,
    Logo
} from './Header.styled';


const Header = () => {
    const [openSideNav, setOpenSideNav] = useState(false);

    const onClose = () => {
        setOpenSideNav(false);
    }

    const openSideNavHandler = () => {
        setOpenSideNav(true);
    }

    return (
            <HeaderStyle>
                <HeaderHorizontal>
                    <Logo aria-label="Keerthi">Keerthi</Logo>
                    <NavItems className="desktopView"/>
                    <IconButtonStyle onClick={openSideNavHandler} className="mobileView">
                        <Lines3Icon fill={'#FFFFFF'} width={20} height={20}  />
                    </IconButtonStyle>
                </HeaderHorizontal>
                <div className="mobileView" >
                    <Modal 
                        isOpen={openSideNav} 
                        onClose={onClose} 
                        style={{
                            left: 0, 
                            margin: 0, 
                            height: '100%',
                            width: '75%',
                            backgroundColor: '#331E36',
                            border: '1px solid #331E36',
                            padding: '16px 0px 20px 0px',
                            boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)'

                        }}
                    >
                        <SideNav onClose={onClose}/>
                    </Modal>
                </div>   
            </HeaderStyle>
        );
}

export default Header;
