
import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import './LeadForm.css';


import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

async function addContact() {
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      phone: formState.phone
    }
  };

  console.log(data);
  const apiData = await API.post('formapi', '/contact', data);
  console.log({ apiData });
  alert('Cadastro feito');
}

const formState: { [x: number]: any; name: any; email: any; phone: any; } = { name: '', email: '', phone: 0 };

function updateFormState(key: any, value: any) {
  formState[key] = value;
}

function LeadForm() {
  return (
    <Container>
      <div>
        <br />
        <Form>
          <Form.Group className="name">
            <Form.Label>Nome: </Form.Label>
            <Form.Control placeholder="Nome" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control placeholder="Email" type="email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Telefone: </Form.Label>
            <Form.Control placeholder="Celular" onChange={e => updateFormState('phone', e.target.value)} />
          </Form.Group>
          <Button onClick={addContact}>Cadastre-se</Button>
        </Form>
      </div>
    </Container>
  );
}

export default LeadForm;