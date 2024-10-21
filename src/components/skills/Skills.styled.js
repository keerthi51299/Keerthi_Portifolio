import styled from 'styled-components';

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    color: #FFFFFF;
    width: 100%;
    padding-top: 60px;
`;

export const SkillsHead = styled.div`
    display: flex;
    justify-content: center;
    color: #C5832B;
`;

export const List = styled.div`
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const SkillCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SkillTitle = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

export const SkillPercentage = styled.div`
    height: 8px;
    width: 100%;
    background-color: #442B48;
    border-radius: 100px;

    @media screen and (max-width: 600px) {
        height: 6px;
    }
`;

export const SkillInner = styled.div`
    width: ${(props) => props?.width};
    background-color: #C5832B;
    height: 100%;
    border-radius: inherit;
`;
