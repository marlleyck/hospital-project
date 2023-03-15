export type AppContextType = {
  patientName: string;
  setPatientName: (name: string) => void;
  patientWeight: number;
  setPatientWeight: (weight: number) => void;
  patientHeight: number;
  setPatientHeight: (height: number) => void;
  patientImc: number;
  setPatientImc: (imc: number) => void;
  patientStatus: string;
  setPatientStatus: (status: string) => void;
  patientBloodType: string;
  setPatientBloodType: (bloodType: string) => void;
  patientDoctor: string;
  setPatientDoctor: (doctor: string) => void;
};
