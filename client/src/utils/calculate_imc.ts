export const calculateImc = (height: string, weight: string) => {
  const imc = (Number(weight) / Number(height) ** 2).toFixed(2);

  return imc;
};
