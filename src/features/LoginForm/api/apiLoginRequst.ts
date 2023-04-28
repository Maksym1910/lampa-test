import { ILoginData } from '../types/loginData';

export const apiLoginRequest = async (data: ILoginData) => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};
