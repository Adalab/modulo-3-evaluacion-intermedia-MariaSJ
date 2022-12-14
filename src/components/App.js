import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';
//import ls from '../services/localStorage';


function App() {

  // STATES
  const [adalabers, setAdalabers] = useState([]);
  const [newAdalaber, setNewAdalaber] = useState({
    id: crypto.randomUUID(),
    name: "",
    counselor: "",
    speciality: "",
    social_networks: [],
  });
  const [searchName, setSearchName] = useState("");
  const [searchCounselor, setSearchCounselor] = useState("");


  // USEEFFECT

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    callToApi().then((data) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente X
      setAdalabers(data.results);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);


  // HANDLE FUNCTIONS

  const handleNewAdalaber = (ev) => {
    setNewAdalaber({ ...newAdalaber, [ev.target.id]: ev.target.value });
  }

  const handleClick = (event) => {
    event.preventDefault();
    setAdalabers([...adalabers, newAdalaber]);
    setNewAdalaber({
      id: crypto.randomUUID(),
      name: "",
      counselor: "",
      speciality: "",
      social_networks: [],
    });
  }

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value)
  }
  const handleSearchCounselor = (ev) => {
    setSearchCounselor(ev.target.value)
  }


  const htmlAdalabers = adalabers
    .filter((adalabers) => adalabers.name.toLowerCase().includes(searchName.toLowerCase()))
    .filter((adalabers) => adalabers.counselor.includes(searchCounselor))
    .map((oneAdalaber) => {
      return (
        <tr className='adalaber__row' key={oneAdalaber.id}>
          <td className='adalaber__name'>{oneAdalaber.name}</td>
          <td className='adalaber__counselor'>{oneAdalaber.counselor}</td>
          <td className='adalaber__speciality'>{oneAdalaber.speciality}</td>
          <td className='adalaber__socialmedia'>{oneAdalaber.social_networks.map((eachOne, index) => {
            return <a key={index} href={eachOne.url} target="_blank" rel="noopener noreferrer">{eachOne.name}</a>
          })}
          </td>
        </tr>
      )
    });


  return (
    <>
      <header className="header">
        <h1>Adalabers</h1>
      </header>

      <main className="main">
        <section className="search">
          <form action="">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" placeholder='Ej:Maricarmen' value={searchName} onInput={handleSearchName} />
            <label htmlFor="counselor">Escoge una tutora:</label>
            <select name="counselor" id="counselor" value={searchCounselor} onInput={handleSearchCounselor}>
              <option value="">Todas</option>
              <option value="Yanelis">Yanelis</option>
              <option value="Iván">Iván</option>
              <option value="Dayana">Dayana</option>
            </select>
          </form>
        </section>

        <section className="adalabers-list">
          <table className="table">
            {/* <!-- Fila de cabecera --> */}
            <thead><tr>
              <th>Nombre</th>
              <th>Tutora</th>
              <th>Especialidad</th>
              <th>Redes Sociales</th>
            </tr></thead>
            {/* <!-- Fin fila de cabecera --> */}
            <tbody>
              {htmlAdalabers}
            </tbody>
          </table>
        </section>

        <section className="newAdalaber">
          <h2>Añadir una nueva adalaber</h2>
          <hr />
          <form action="">
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" value={newAdalaber.name} onInput={handleNewAdalaber} />
            <label htmlFor="counselor">Tutora:</label>
            <input type="text" name="counselor" id="counselor" value={newAdalaber.counselor} onInput={handleNewAdalaber} />
            <label htmlFor="speciality">Especialidad:</label>
            <input type="text" name="speciality" id="speciality" value={newAdalaber.speciality} onInput={handleNewAdalaber} />
            <input type="submit" value="Añadir" onClick={handleClick} />
          </form>
        </section>
      </main>
    </>
  );
}

export default App;