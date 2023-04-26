import React, { FormEvent, useCallback, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { apiLogin } from '../api/apiLogin';
import { LoginData } from '../types/login-data';

export const Login = () => {
  const [formData, setFormData] = useState<LoginData>({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }, [formData, setFormData]);

  const handleLogin = useCallback(async (event: FormEvent) => {
    event.preventDefault();
    const { token } = await apiLogin(formData);
    if (token) {
      localStorage.setItem('token', token);
      navigate('/products');
    }
  }, [formData, navigate]);

  return (
    <form onSubmit={handleLogin}>
      <input
        name="username"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};
