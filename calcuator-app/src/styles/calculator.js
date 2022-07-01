import styled from "styled-components";

export const CalculatorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(23, 23, 23, 0.75);
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const Calculator = styled.div`
  display: grid;

  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(7, 50px);
  background-color: white;
  border-radius: 8px;
  grid-template-areas:
    "header header header header header"
    "result result result result result"
    "num num num num num"
    "num num num num num"
    "num num num num num"
    "num num num num num"
    "footer footer footer footer footer";
  & .infoHead {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    & h4,
    h3 {
      margin: 0;
    }
  }
  & .calcHead {
    grid-area: header;
    background-color: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px;
  }
  & .result {
    grid-area: result;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    & .iconOperation {
      position: absolute;
      right: 20px;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  & .numbersButtons {
    grid-area: num;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(4, 50px);
    & .numberField {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  & .check {
    grid-column: 5/-1;
    grid-row: 3/-1;
  }
  & .footer {
    grid-area: footer;
  }
`;
