export const calculateImc = (height: number = 1.63, weight: number = 80) => {
  const imc = (weight / height ** 2).toFixed(2);

  return Number(imc);
};
