import styled from 'styled-components';

export const AboutContainer = styled.div`
    background-color: #442B48; 
    color: #FFFFFF;
    display: flex;
    border-radius: 8px;
    box-sizing: border-box;
    justify-content: space-between;
    height: 400px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    @media screen and (max-width: 600px) {
        flex-direction: column;
        height: auto;
        justify-content: center;
    }
`;

export const ImageContainer = styled.div`
    width: 35%;
    background-image: url("about.jpg");
    height: 100%;
    background-size: cover;
    background-position: center center;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 4px 0px 3px 0px #331E36 inset;

    @media screen and (max-width: 992px) {
        width: 40%;
    }

    @media screen and (max-width: 768px) {
        width: 45%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        border-bottom-left-radius: 0px;
        border-top-right-radius: 8px;
        height: 200px;
        box-shadow: 1px 0px 8px 0px #331E36 inset;
    }
`;

export const AboutText = styled.h3`
    margin: 0px;
    font-weight: 400;
    color: #C5832B;
`;

export const AboutInfo = styled.div`
    width: 65%;
    padding: 16px;
    box-sizing: border-box;
    line-height: 1.65;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

     @media screen and (max-width: 992px) {
        gap: 12px;
        padding: 12px;
        width: 60%;
    }

    @media screen and (max-width: 768px) {
        gap: 8px;
        padding: 8px;
        width: 55%;
        font-size: 14px;
    }

    @media screen and (max-width: 600px) {
        font-size: 12px;
        width: 100%;
        padding: 8px 12px;
    }
`;
