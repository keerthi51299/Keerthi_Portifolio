import styled from 'styled-components';

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    padding: 0px 120px 40px 120px;

    @media screen and (max-width: 992px) {
        padding: 0px 80px 32px 80px;
    }

    @media screen and (max-width: 768px) {
        padding: 0px 40px 24px 40px;
    }
    
    @media screen and (max-width: 600px) {
        align-items: center;
    }
`;
