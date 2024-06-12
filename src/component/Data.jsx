import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

const Data = ({ children }) => {
  const [api, setApi] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const veri = await response.json();
        setApi(veri);
      } catch (error) {
        console.error('Veri alınamadı', error);
      }
    }

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={api}>
      {children}
    </DataContext.Provider>
  );
};

export default Data;
