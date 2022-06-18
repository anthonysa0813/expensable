import styled from "styled-components";

export const InfoMonthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  & .infoMonths {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
  & .iconContainer {
    padding: 9px 11px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--gray-100);
  }
  & .infoExpense {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & .price {
      font-size: 36px;
      font-weight: 600;
      color: var(--red-500);
    }
    & p {
      font-size: 14px;
      color: var(--gray-500);
    }
  }
`;
