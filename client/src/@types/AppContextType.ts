export type AppContextType = {
  patientName: string;
  setPatientName: (name: string) => void;
  patientWeight: string | undefined;
  setPatientWeight: (weight: string) => void;
  patientHeight: string | undefined;
  setPatientHeight: (height: string) => void;
  patientImc: string | undefined;
  setPatientImc: (imc: string) => void;
  patientStatus: string;
  setPatientStatus: (status: string) => void;
  patientBloodType: string;
  setPatientBloodType: (bloodType: string) => void;
  patientDoctor: string;
  setPatientDoctor: (doctor: string) => void;
  createPatient: () => void;
  patients: any;
  loginUser: () => void;
};
