import styled from 'styled-components';

export const CounterTasksStyles = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    margin-top: 30px;
    span {
        color: var(--blueDark);
        strong {
            padding: 10px;
            background: var(--text-title);
            border-radius: 50px;
        }
    }
    span:nth-child(2) {
        color: var(--purpleDark);
    }
`;