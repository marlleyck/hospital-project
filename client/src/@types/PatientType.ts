export type PatientType = {
  id: string;
  name: string;

  weight: string | undefined;
  height: string | undefined;
  imc: string | undefined;

  status_description: string;
  blood_type: string;

  doctor: string;
};
