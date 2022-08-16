import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 100%;
  background: var(--gray300);
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
    color: var(--purpleDark);
    text-align: center;
    margin-top: 10px;
  }
`;