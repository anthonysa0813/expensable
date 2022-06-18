import styled from "styled-components";

export const NewCategoryContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  color: white;
  background-color: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  & .newCateCard {
    padding: 1rem;
    background-color: white;
    color: black;
    border-radius: 8px;
    & .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & form {
      display: flex;
      flex-direction: column;
      margin-block-end: 1rem;
      & label {
        margin-block-end: 4px;
      }
      & input {
        padding: 8px 12px;
        border-radius: 6px;
        border: none;
        outline: none;
        border: 1px solid var(--gray-200);
      }
      & button[type="submit"] {
        padding: 8px;
        border: none;
        color: white;
        background-color: var(--pink-600);
        border-radius: 8px;
        margin-block-start: 2rem;
      }
    }
    & .colorsCategory {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding-inline: 1rem;
      .circle-color {
        width: 70px;
        height: 70px;
        border-radius: 50%;

        &.red {
          background-color: var(--red-500);
        }
        &.orange {
          background-color: var(--orange-500);
        }
        &.yellow {
          background-color: var(--yellow-500);
        }
        &.green {
          background-color: var(--green-600);
        }
        &.teal {
          background-color: var(--teal-500);
        }
        &.cyan {
          background-color: var(--cyan-500);
        }
        &.light-blue {
          background-color: var(--light-blue-500);
        }
        &.blue {
          background-color: var(--blue-500);
        }
        &.activeBorder {
          border: 3px dashed var(--background-dark);
          padding: 1rem;
        }
      }
    }
    & .iconsCategory {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding-inline: 1rem;
      & .circle-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      & .activeIconBorder {
        background-color: var(--gray-600);
        color: white;
      }
    }
  }
`;
