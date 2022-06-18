import styled from "styled-components";

export const CategoryContainer = styled.main`
  & .gridCategory {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    & .categoryCard {
      padding: 18px 16px;
      border: 3px dashed var(--gray-500);
      border-radius: 8px;
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      height: 84px;
      & i {
        color: var(--gray-500);
      }
      & .boxIcon {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }
  }
`;
