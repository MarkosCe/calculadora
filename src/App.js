import './App.css';
import Boton from './componentes/Boton';

function App() {
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
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>+</Boton>
          <Boton>.</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
