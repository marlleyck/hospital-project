import { SideBar } from "../../components/SideBar";
import { Button } from "../../components/Button";

import {
  Body,
  Container,
  Content,
  FieldsContent,
  Input,
  Label,
} from "./styles";

export const AddPatient = () => {
  return (
    <Container>
      <SideBar />
      <Content>
        <Body>
          <FieldsContent>
            <Label>
              Nome
              <Input type="text" />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Peso
              <Input type="number" />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Altura
              <Input type="number" />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Imc
              <Input type="number" />
            </Label>
          </FieldsContent>
          <Button title="Calcular IMC" />
          <FieldsContent>
            <Label>
              Sintomas
              <Input type="text" />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Tipo Sanguíneo
              <Input type="text" />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Médico
              <Input type="text" />
            </Label>
          </FieldsContent>
          <Button title="Adicionar Paciente" />
        </Body>
      </Content>
    </Container>
  );
};
