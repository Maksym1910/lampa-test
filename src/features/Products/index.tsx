import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <h1>Products</h1>
      <Link to="/cart">Cart</Link>
      <button
        type="button"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Products;
