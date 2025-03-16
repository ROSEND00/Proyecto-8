import React from 'react';
import './Home.css'; // Importa el archivo CSS para estilos

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenidos a Agroshop</h1>
        <p>Es una plataforma de comercio electrónico especializada en la venta de productos agrícolas e insumos agropecuarios.</p>
        <button className="home-button">Comenzar</button>
      </header>
    </div>
  );
};

export default Home;