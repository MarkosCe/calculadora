import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const manejarClear = () => {
    setInput('');
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }else {
      alert('Ingresa valores');
    }
  };
  
  return (
    <div className='App'>
      <div className="logo-contenedor">
        <span>C</span>
        <span>A</span>
        <span>L</span>
        <span>C</span>
        <span>U</span>
        <span>L</span>
        <span>A</span>
        <span>D</span>
        <span>O</span>
        <span>R</span>
        <span>A</span>
      </div>
      <div className='calculadora-contenedor'>
          <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={manejarClear}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
