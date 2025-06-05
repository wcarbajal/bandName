import Chart, { Colors } from 'chart.js/auto';
import { useContext, useEffect, useRef } from 'react';
import { SocketContex } from '../context/socketContex';

export const BandChart = () => {

  const { socket } = useContext( SocketContex );
  const chartRef = useRef( null );

  useEffect( () => {
    socket.on( 'current-bands', ( bands ) => {
      crearGrafica( bands );
    } );

    // Limpieza del evento al desmontar
    return () => {
      socket.off( 'current-bands' );
      if ( chartRef.current ) {
        chartRef.current.destroy();
      }
    };
  }, [ socket ] );

  const crearGrafica = ( bands = [] ) => {
    const ctx = document.getElementById( 'myChart' );

    // Destruir el gráfico anterior si existe
    if ( chartRef.current ) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart( ctx, {
      type: 'bar',
      data: {
        labels: bands.map( band => band.name ),
        datasets: [ {
          label: '# of Votes',
          type: 'bar',
          data: bands.map( band => band.votes ),
          borderWidth: 2,
          backgroundColor: [
            'rgba(255,99,132,0.2)',
            'rgba(54,162,235,0.2)',
            'rgba(255,206,86,0.2)',
            'rgba(75,192,192,0.2)',
            'rgba(153,102,255,0.2)',
            'rgba(255,159,6,0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(75,192,192,1)',
            'rgba(153,102,255,1)',
            'rgba(255,159,6,1)',
          ]
        } ]
      },
      options: {
        indexAxis: 'y',
        animation: false,
        animations: {
          Colors: false
        },
        scales: {
          y: {
            stacked: true
          }
        },
        responsive: true
      }
    } );
  };

  return (

    <div style={{ height:'60vh', width:'80vw'}}>
      <canvas id="myChart"></canvas>
    </div>
  
);
};