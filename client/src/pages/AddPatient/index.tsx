import { ChangeEvent, useContext, useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Button } from "../../components/Button";
import { AppContext } from "../../contexts/AppContext";

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
  const appContext = useContext(AppContext);

  return (
    <Container>
      <SideBar />
      <Content>
        <Body>
          <FieldsContent>
            <Label>
              Nome
              <Input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientName(e.target.value)
                }
                value={appContext.patientName}
              />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Peso
              <Input
                type="number"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientWeight(+e.target.value)
                }
                value={appContext.patientWeight}
              />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Altura
              <Input
                type="number"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientHeight(+e.target.value)
                }
                value={appContext.patientHeight}
              />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Imc
              <Input
                disabled
                type="number"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientImc(+e.target.value)
                }
                value={appContext.patientImc}
              />
            </Label>
          </FieldsContent>
          <FieldsContent
            onClick={() => appContext.setPatientImc(calculateImc())}
          >
            <Button title="Calcular IMC" />
          </FieldsContent>
          <FieldsContent>
            <Label>
              Sintomas
              <Input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientStatus(e.target.value)
                }
                value={appContext.patientStatus}
              />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Tipo Sanguíneo
              <Input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientBloodType(e.target.value)
                }
                value={appContext.patientBloodType}
              />
            </Label>
          </FieldsContent>
          <FieldsContent>
            <Label>
              Médico
              <Input
                type="text"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  appContext.setPatientDoctor(e.target.value)
                }
                value={appContext.patientDoctor}
              />
            </Label>
          </FieldsContent>
          <Button title="Adicionar Paciente" />
        </Body>
      </Content>
    </Container>
  );
};
