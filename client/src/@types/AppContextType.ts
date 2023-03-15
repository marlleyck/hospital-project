export type AppContextType = {
  patientName: string;
  setPatientName: (name: string) => void;
  patientWeight: number | undefined;
  setPatientWeight: (weight: number) => void;
  patientHeight: number | undefined;
  setPatientHeight: (height: number) => void;
  patientImc: number | undefined;
  setPatientImc: (imc: number) => void;
  patientStatus: string;
  setPatientStatus: (status: string) => void;
  patientBloodType: string;
  setPatientBloodType: (bloodType: string) => void;
  patientDoctor: string;
  setPatientDoctor: (doctor: string) => void;
};
