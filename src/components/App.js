import '../styles/App.scss';
import listAdalab from "../data/adalabers.json";
import { useState } from 'react';
//import callToApi from '../services/api';
//import ls from '../services/localStorage';

// STATES



// USEEFFECT

// useEffect(() => {
//   // Dentro de useEffect llamamos a la API
//   callToApi().then((data) => {
//     // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente X
//     X(data);
//   });
//   // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
// }, []);

function App() {

  const [adalabers, setAdalabers] = useState(listAdalab);

  const htmlAdalabers = adalabers.results.map((oneAdalaber) => {
    return (
      <tr className='adalaber__row' key={oneAdalaber.id}>
        <td className='adalaber__name'>{oneAdalaber.name}</td>
        <td className='adalaber__counselor'>{oneAdalaber.counselor}</td>
        <td className='adalaber__speciality'>{oneAdalaber.speciality}</td>
      </tr>
    )
  });

  return (
    <>
    <h1>Adalabers</h1>
      {/* <form action="">
      </form> */}
      <table className="table">
        {/* <!-- Fila de cabecera --> */}
        <thead><tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr></thead>
        {/* <!-- Fin fila de cabecera --> */}
        <tbody>
          {htmlAdalabers}
        </tbody>
      </table>
      <h2>Añadir una nueva adalaber</h2>
      <hr />
      
    </>
  );
}

export default App;