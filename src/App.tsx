import styled from "styled-components";
import Card from "./Components/Card";
import Form from "./Components/Form";

const AppContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 80%;
`;

const FormContainer = styled.div`
  width: 20%;
`;

function App(): JSX.Element {
  return (
    <AppContainer>
      <CardContainer>
        <Card />
      </CardContainer>
      <FormContainer>
        <Form />
      </FormContainer>
    </AppContainer>
  );
}

export default App;
