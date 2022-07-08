import React from 'react';
import '../hojas-de-estilo/Pantalla.css'

//otra dorma de definir un componente funcional
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;