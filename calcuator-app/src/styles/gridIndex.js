import styled from "styled-components";

export const GridMainContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr 25%;
  grid-template-rows: 100vh;
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  & .downSidebar {
    border-top: 1px solid var(--gray-200);
    padding: 1rem;
    & .title {
      color: var(--gray-700);
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
    }
    & h5 {
      margin: 0;
    }
    & .email {
      color: var(--gray-500);
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      margin: 0;
      margin-block-end: 20px;
    }
    & button {
      margin: 0;
      border: none;
      outline: none;
      color: var(--gray-600);
    }
  }
`;
