import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  const [miBlob, setMiBlob] = useState(null);
  const [mensaje, setMensaje] = useState('');

  const crearBlob = () => {
    const texto = "Hola profe, este es el texto de prueba para el TP6 de Lenguaje IV con React.";
    const nuevoBlob = new Blob([texto], { type: 'text/plain' });
    setMiBlob(nuevoBlob);
    setMensaje("Blob creado correctamente.");
  };

  const descargarBlob = () => {
    if (!miBlob) {
      alert("Tenés que crear el Blob primero.");
      return;
    }
    
    const url = URL.createObjectURL(miBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'archivo_tp6_react.txt';
    a.click();
    
    URL.revokeObjectURL(url);
  };

  const leerSlice = () => {
    if (!miBlob) {
      alert("Tenés que crear el Blob primero.");
      return;
    }
    
    const porcion = miBlob.slice(0, 10);
    const lector = new FileReader();
    
    lector.onload = (e) => {
      setMensaje(`Resultado del slice (primeros 10 caracteres): "${e.target.result}"`);
    };
    
    lector.readAsText(porcion);
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <h1>Ejemplo de uso de Blobs</h1>
        
        <div className="botones">
          <button onClick={crearBlob}>Crear Blob de texto</button>
          <button onClick={descargarBlob}>Descargar Blob</button>
          <button onClick={leerSlice}>Leer Blob (Slice)</button>
        </div>
        
        <p className="mensaje">{mensaje}</p>
      </main>

      <Footer />
    </div>
  );
}

export default App;