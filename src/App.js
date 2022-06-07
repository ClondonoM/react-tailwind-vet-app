import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';
import './App.css';

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const deletePatient = (id) => {
    const newPatients = patients.filter((p) => p.id !== id);
    setPatients(newPatients);
  };
  return (
    <div className='container mx-auto mt-10'>
      <Header />
      <div className='mt-8 md:flex'>
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          patient={patient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
