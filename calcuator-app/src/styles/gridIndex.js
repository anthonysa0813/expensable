import styled from "styled-components";

export const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 25%;
  grid-template-rows: 100vh;
`;

export const SidebarContainer = styled.div`
  background-color: var(--gray-100);
  .logoContainer {
    padding: 20px 16px;
  }
  & .nav {
    padding: 0.5rem;
  }
  & ul {
    padding: 0;
    & li {
      list-style-type: none;
      margin-block-end: 1rem;
      padding: 11px;
    }
    & li .active {
      border-radius: 6px;
      width: 100%;
      display: block;
      padding: 11px;

      background-color: var(--pink-400);
      color: white;
    }
    & a {
      text-decoration: none;
      color: var(--gray-600);
    }
  }
`;
