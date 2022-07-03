import styled from "@emotion/styled";
import Checkbox from "./Checkbox";
import Text from "./Typography";

const Container = styled.div`
  width: 100%;
`;

const CheckboxesContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  width: 100%;
`;

function CheckBoxGroup({title, checkboxes}){
  return(
    <Container>
      <Text>{title}</Text>
      <CheckboxesContainer>
        {checkboxes.map((checkbox) =>(
          <Checkbox key={checkbox.name} {...checkbox} />
        ))}
      </CheckboxesContainer>
    </Container>
  );
}

export default CheckBoxGroup;