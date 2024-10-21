import styled from 'styled-components';

export const HeaderStyle = styled.header`
    padding: 0px 120px 0px 120px;
    background-color: #331E36;
    color: #FFFFFF;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    position: sticky;
    top: 0;

    @media screen and (max-width: 992px) {
        padding: 0px 80px 0px 80px;
    }
    @media screen and (max-width: 768px) {
        padding: 0px 40px 0px 40px;
    }
    
    .mobileView {
        display: none;
    }
    @media screen and (max-width: 600px) {
        .mobileView {
            display: flex;
        }
    }
`;

export const HeaderHorizontal = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .desktopView {
        display: flex;
    }
    .mobileView {
        display: none;
    }

    @media screen and (max-width: 600px) {
        flex-direction: row-reverse;

        .desktopView {
            display: none;
        }
        .mobileView {
            display: flex;
        }

    }
`;

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    background-color: #331E36;
    width: 540px;
    font-size: 16px;
    height: 100%;
    @media screen and (max-width: 900px) {
        width: 480px;
    }
    @media screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: flex-start;
        width: auto; 
    }
`;

export const Logo = styled.h3`
    font-weight: 500;
    color: #C5832B;
`;

export const SideNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #331E36;
    color: #FFFFFF;
`;

export const SideNavHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
    padding: 20px;
`;

export const IconButtonStyle = styled.button`
    background: transparent;
    border-radius: 100px;
    border-color: transparent;
    padding: 8px;
    cursor: pointer;
`;

export const CenterAlign = styled.div`
    display: flex;
    align-items: center;
`;

export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0px 2px 0px;
    width: 80px;
    justify-content: center;
    background-color: ${(props) => props.selected ? '#FFFFFF' : 'transparent'};
    a {
        color: ${(props) => props.selected ? '#331E36' : '#FFFFFF'};
    }
    font-weight: ${(props) => props.selected ? 500 : 400};

    &:hover {
        background-color: #FFFFFF;
        font-weight: 500;
        a {
            color: #331E36;
        }
    }
    @media screen and (max-width: 600px) {
        height: 60px;
        padding: 0;
        justify-content: flex-start;
        width: 100%;
    }
`;

export const NavItem = styled.a`
    cursor: pointer;
    @media screen and (max-width: 600px) {
        margin-left: 20px;
    }
    text-decoration: none;
    color: #FFFFFF;
`;
