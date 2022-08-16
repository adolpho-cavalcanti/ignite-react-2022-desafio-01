import styled from 'styled-components';

export const ActionsUser = styled.div`
    width: 100%;
    height: 10%;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--background);
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
        outline: none;
        transition: 1.5s;
        &:checked {
            transition: 1.5s;
        }
    }
    button {
        padding: 5px;
        border-radius: 5px;
        background-color: var(--background);
    }
    button:hover {
        background: #333;
        opacity: 0.6;
        transition: 1s;
    }
`;