import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); 

  return (
    <AppContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
