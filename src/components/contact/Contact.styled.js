import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: #FFFFFF;
    width: 100%;
    padding-top: 60px;
`;

export const ContactHead = styled.div`
    display: flex;
    justify-content: center;
    color: #C5832B;
`;

export const ContactCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-weight: 300;

    @media screen and (max-width: 600px) {
        gap: 0px;
        background-color: #442B48;
        border-radius: 8px;
        padding: 2px 12px 14px 10px;
        width: 100%;
    }
`;

export const ContactHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ContactList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`;

export const ContactInfo = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 600px) {
        justify-content: flex-start;
    }
`;
