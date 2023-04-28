import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'shared/components/Button';

export const CartNavigationButton: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const handleCartButtonClick = () => {
    navigate('/cart');
  };

  return (
    <Button onClick={handleCartButtonClick}>Cart</Button>
  );
};
