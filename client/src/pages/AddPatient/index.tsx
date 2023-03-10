import { useState } from "react";
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
import { calculateImc } from "../../utils/calculate_imc";

export const AddPatient = () => {
  const [imc, setImc] = useState<number>();

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
              <Input value={imc} disabled type="number" />
            </Label>
          </FieldsContent>
          <FieldsContent onClick={() => setImc(calculateImc())}>
            <Button title="Calcular IMC" />
          </FieldsContent>
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
