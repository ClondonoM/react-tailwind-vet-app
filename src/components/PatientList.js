import Patient from './Patient';

const PatientList = () => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Patient List</h2>
      <p className='text-lg mt-10 text-center mb-5'>
        Admin here, your
        <span className='text-green-600 font-bold text-xl'>
          {' '}
          Patient and Dates
        </span>
      </p>
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
      <Patient />
    </div>
  );
};

export default PatientList;
