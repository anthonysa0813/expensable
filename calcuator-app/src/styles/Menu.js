import styled from "styled-components";

export const MenuContainer = styled.header`
  & nav ul {
    display: flex;
    gap: 40px;
    & i {
      margin-inline-end: 10px;
    }
    & li {
      list-style: none;
    }
  }
`;
