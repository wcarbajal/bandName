import { useContext, useState } from 'react';
import { SocketContex } from '../context/socketContex';



export const BandAdd = (  ) => {

  const [ valor, setValor ] = useState( '' );

  const { socket } = useContext( SocketContex )


  const onSubmit = ( ev ) => {
    ev.preventDefault();

    if ( valor.trim().length > 0 ) {
      //TODO: Llamar a la funcion para emitir el evento

      socket.emit( 'crear-banda', {
        nombre: valor
      } );


      setValor( '' );

    }

  };


  return (
    <>
      <h3>Agregar banda</h3>

      <form onSubmit={ onSubmit }>
        <input
          type="text"
          className="form-control"
          placeholder="Nuevo nombre de banda"
          value={ valor }
          onChange={ ev => setValor( ev.target.value ) }
        />

      </form>
    </>


  );
};