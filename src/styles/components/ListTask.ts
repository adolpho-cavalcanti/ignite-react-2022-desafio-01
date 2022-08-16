import styled from 'styled-components';

export const ListTask = styled.div`
    width: 100%;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const TaskEmpty = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const DescriptionTaskEmptyLineOne = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: var(--shape);
    margin: 10px 0;
    `;

export const DescriptionTaskEmptyLineTwo = styled.span`
    color: var(--shape);
    font-size: 18px;
`;

