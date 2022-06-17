import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & form {
    display: flex;
    flex-direction: column;
    & h1 {
      margin-block-end: 2rem;
      text-align: center;
    }
    & button {
      margin: 0;
      padding: 8px;
      background-color: var(--primary-300);
      color: white;
      border: none;
      border-radius: 6px;
    }
    & .field {
      margin-block-end: 1rem;
      display: flex;
      flex-direction: column;
      & input {
        padding: 8px 12px;
        margin-block-start: 4px;
        border: none;
        border: 1px solid var(--gray-200);
        border-radius: 6px;
      }
    }
    & a {
      text-decoration: none;
      text-align: center;
      margin-block-start: 40px;
    }
  }
`;
