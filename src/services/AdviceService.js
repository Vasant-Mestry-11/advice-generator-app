import { ADVICE_API_URL } from "../constants/Advice";

export const getAdvice = async () => {
  try {
    const response = await fetch(ADVICE_API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
