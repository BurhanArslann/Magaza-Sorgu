import React, { useEffect } from 'react';

const Data = () => {
  async function fetchData() {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const veri = await response.json();
      console.log(veri);
      return veri;
    } catch (error) {
      console.error('Veri alınamadı', error);
      return null;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <></>
  );
}

export default Data;
