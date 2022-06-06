import Patient from './Patient';

const PatientList = ({ patients }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {patients && patients.length ? (
        <>
          <h2 className='font-black text-3xl text-center'>Patient List</h2>
          <p className='text-lg mt-10 text-center mb-5'>
            Admin here, your
            <span className='text-green-600 font-bold text-xl'>
              {' '}
              Patient and Dates
            </span>
          </p>
          {patients.map((patient) => (
            <Patient key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className='font-black text-3xl text-center'>No Patients yet</h2>
          <p className='text-lg mt-10 text-center mb-5'>
            Start by adding a Patient
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
