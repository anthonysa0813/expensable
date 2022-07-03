import styled from "@emotion/styled";
import {colors} from "../styles/colors";
import { typography } from "../styles/typography";

const Container =styled.div`
  display: flex;
  gap: 0.5rem;
  ${typography.text.sm}
`;

const StyledCheckbox =styled.input`
  width: 1rem;
  height: 1rem;
  accent-color: ${colors.pink[600]};
`;

export default function Checkbox({id, name, label, ...rest}){
  return (
    <Container>
      <StyledCheckbox type="checkbox" id={id || name} {...rest}/>
        <label htmlFor ={id || name}>{label || name} </label>
    </Container>
  );
}