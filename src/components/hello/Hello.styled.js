import styled from 'styled-components';

export const HelloCotainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #FFFFFF;
    padding-top: 60px;

    @media screen and (max-width: 600px) {
        flex-direction: column-reverse;
        gap: 16px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media screen and (max-width: 600px) {
        justify-content: center;
        align-items: center;
        gap: 8px;
    }
`;

export const Name = styled.h3`
    margin: 0px;
    font-weight: 400;
`;

export const Role = styled.h1`
    font-size: 80px;
    font-weight: 400;
    margin: 0px;
    color: #C5832B;

    @media screen and (max-width: 992px) {
        font-size: 60px;
    }

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
`;

export const Chip = styled.button`
    font-weight: 600;
    height: 40px;
    background-color: #FFFFFF;
    border-radius: 100px;
    padding: 4px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    box-sizing: border-box;
    a {
        color: #331E36;
        text-decoration: none;
    }
    border-style: none;
`;

export const Image = styled.img`
    width: 400px;

    @media screen and (max-width: 992px) {
        width: 360px;
    }

    @media screen and (max-width: 768px) {
        width: 320px;
    }

    @media screen and (max-width: 600px) {
        width: 320px;
    }
`;