import styled from "styled-components";
import Card from "./Components/Card";
import Form from "./Components/Form";
import { useState } from "react";

function App(): JSX.Element {
  const [formData, setFormData] = useState<FormData | null>(null);

  const handleFormSubmit = (data: FormData) => {
    setFormData(data);
  };

  return (
    <AppContainer>
      <CardContainer>
        <Card formData={formData} />
      </CardContainer>
      <FormContainer>
        <Form onFormSubmit={handleFormSubmit} />
      </FormContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardContainer = styled.div`
  width: 60%;
`;

const FormContainer = styled.div`
  width: 35%;
`;
