import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Button } from "../Button";

import { calculateImc } from "../../utils/calculate_imc";

import { Body, FieldsContent, Input, Label } from "./styles";

export const AddPatientForm = () => {
  const appContext = useContext(AppContext);

  return (
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
            placeholder="Ex.: 64,2"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              appContext.setPatientWeight(e.target.value)
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
            placeholder="Ex.: 1,78"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              appContext.setPatientHeight(e.target.value)
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
              appContext.setPatientImc(e.target.value)
            }
            value={appContext.patientImc}
          />
        </Label>
      </FieldsContent>
      <FieldsContent
        onClick={() => {
          if (
            appContext.patientHeight !== undefined ||
            appContext.patientWeight !== undefined
          ) {
            appContext.setPatientImc(
              calculateImc(appContext.patientHeight!, appContext.patientWeight!)
            );
          } else {
            alert("Preencha todos os campos!");
          }
        }}
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
      <FieldsContent onClick={appContext.createPatient}>
        <Button title="Adicionar Paciente" />
      </FieldsContent>
    </Body>
  );
};
