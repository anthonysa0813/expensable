import styled from "styled-components";
import {colors} from "../styles/colors";
import {typography} from "./typography";

export const SidebarSecondContainer = styled.div`
  border-left: 1px solid #e1e1e1;
  padding: 24px 32px;
  & .transactionHead {
    h2 {
      margin: 0;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;


const StyledInput = styled.input`
  padding: 8px 12px;
  border: 1px solid${colors.gray[200]};
  border-radius: 6px;
  widht:100%;
`;

const StyledLabel = styled.label`
  ${typography.text.xs};
  text-transform: uppercase;
`;


function Input({label, ...rest}){
  return(
    <div>
      {label && <StyledLabel size="sm">{label}</StyledLabel>}
      <StyledInput {...rest}/>
    </div>
  );

}

export default Input;