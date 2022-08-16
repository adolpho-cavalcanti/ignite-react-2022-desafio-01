import styled from 'styled-components';

export const SearchBar = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content:center;
    align-items:center;
    margin-top: 20px;
    form {
      width: 100%;
      display: flex;
      margin: 0;
      input {
        width: 90%;
        outline: none;
        border: none;
        border-radius: 10px;
        padding: 20px;
        background: var(--gray300);
        color: var(--shape);
        @media(max-width: 780px) {
          width: 80%;
        }
      }
      button {
        width: 10%;
        background: var(--blueDark);
        padding: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        color: var(--shape);
        @media(max-width: 780px) {
          width: 20%;
          padding: 20px 5px;
        }
        img {
          margin-left: 5px;
        }
      }
    }
`;