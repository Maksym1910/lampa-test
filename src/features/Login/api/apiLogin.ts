import { LoginData } from '../types/login-data';

export const apiLogin = async (data: LoginData) => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};
