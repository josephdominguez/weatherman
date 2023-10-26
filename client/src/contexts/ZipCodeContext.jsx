import React, { createContext, useContext, useState } from 'react';

export const ZipCodeContext = createContext();

export function useZipCode() {
  return useContext(ZipCodeContext);
}

export function ZipCodeProvider({ children }) {
  const [zipCode, setZipCode] = useState('84101'); // default for now

  return (
    <ZipCodeContext.Provider value={{ zipCode, setZipCode }}>
      {children}
    </ZipCodeContext.Provider>
  );
}
