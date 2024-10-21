import styled from 'styled-components';

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 60px;
`;

export const ServiceHead = styled.div`
    display: flex;
    justify-content: center;
    color: #C5832B;
`;

export const List = styled.div`
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 1398px) {
        grid-template-columns: 1fr 1fr 1fr;
        gap: 24px;
    }

    @media screen and (max-width: 1069px) {
        grid-template-columns: 1fr 1fr;
        gap: 16px 28px;
    }

    @media screen and (max-width: 700px) {
        gap: 16px;
    }

    @media screen and (max-width: 600px) {
        grid-template-columns: 0.75fr ;
        justify-content: center;
    }
`;

export const Card = styled.div`
    height: 380px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #442B48;
    color: #FFFFFF;

    @media screen and (max-width: 600px) {
        height: 320px;
    }
`;

export const CardImage = styled.img`
    height: 36%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding-top: 8px;
    padding-right: 8px;
`;

export const Item = styled.li`
    font-size: 14px;

    @media screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

export const CardItem = styled.ul`
    padding-left: 32px;
    gap: 8px;
    line-height: 1.4;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 700px) {
        margin: 12px 0px;
    }
`;

export const CardHeading = styled.div`
    padding-left: 16px;
    color: #C5832B;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;
