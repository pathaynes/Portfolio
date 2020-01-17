import React, { useState } from 'react';
import Menu from '../components/Menu/Menu';
import Burger from '../components/Burger/Burger';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </>
  );
};

export default BurgerMenu;
