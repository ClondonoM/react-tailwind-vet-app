import { useState, useEffect } from 'react';
import Error from './Error';

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [name, setName] = useState('');
  const [petOwner, setPetOwner] = useState('');
  const [email, setEmail] = useState('');
  const [admissionDate, setAdmissionDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setName(patient.name);
      setPetOwner(patient.petOwner);
      setEmail(patient.email);
      setAdmissionDate(patient.admissionDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36).substring(2);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, petOwner, email, admissionDate, symptoms].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    const objPatient = {
      name,
      petOwner,
      email,
      admissionDate,
      symptoms,
    };
    if (patient.id) {
      //Editing;
      objPatient.id = patient.id;

      const newPatients = patients.map((p) =>
        p.id === patient.id ? objPatient : p
      );
      setPatients(newPatients);
      setPatient({});
    } else {
      //Adding
      objPatient.id = idGenerator();
      setPatients([...patients, objPatient]);
    }

    // Form reset
    setName('');
    setPetOwner('');
    setEmail('');
    setAdmissionDate('');
    setSymptoms('');
  };
  return (
    <div className='md:w-1/2 lg:w-2/5 mx-3'>
      <h2 className='font-black text-3xl text-center mb-5 '>
        Patient Follow-up
      </h2>
      <p className='text-lg text-center mb-5'>
        Add Patient and{' '}
        <span className='text-green-600 font-bold text-xl '>Admin</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-md py-5 px-5 ml-5 mb-10'
      >
        <div className='mb-5'>
          <label
            htmlFor='pet'
            className='block text-gray-700 uppercase font-bold'
          >
            <i className='fa-solid fa-paw'> </i> Pet Name{' '}
          </label>
          <input
            type='text'
            id='pet'
            placeholder='Pet Name'
            className='border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='petOwner'
            className='block text-gray-700 uppercase font-bold'
          >
            <i className='fa-solid fa-paw'> </i> Pet Owner Name{' '}
          </label>
          <input
            type='text'
            id='petOwner'
            placeholder='Pet Owner Name'
            className='border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md'
            value={petOwner}
            onChange={(e) => setPetOwner(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 uppercase font-bold'
          >
            <i className='fa-solid fa-paw'> </i> email{' '}
          </label>
          <input
            type='email'
            id='email'
            placeholder='Email Pet Owner'
            className='border-2 w-full p-2 mt-2 placeholder-green-400 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='admissionDate'
            className='block text-gray-700 uppercase font-bold'
          >
            <i className='fa-solid fa-paw'> </i> Admission Date{' '}
          </label>
          <input
            type='date'
            id='admissionDate'
            className='border-2 w-full p-2 mt-2  rounded-md'
            value={admissionDate}
            onChange={(e) => setAdmissionDate(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='symptoms'
            className='block  text-gray-700 uppercase font-bold '
          >
            <i className='fa-solid fa-paw'> </i> Symptoms
          </label>
          <textarea
            id='symptoms'
            className='w-full border-2 p-2 mt-2 height-30 placeholder-green-400 rounded-md'
            placeholder='Describe the symptoms'
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        {error && <Error>All fields are required</Error>}
        <input
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white font-bold p-3 w-full rounded-md mt-2 cursor-pointer transition-colors uppercase'
          value={patient.id ? 'Update Patient' : 'Add Patient'}
        />
      </form>
    </div>
  );
};

export default Form;
