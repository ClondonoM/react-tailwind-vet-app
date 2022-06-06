const Patient = ({ patient }) => {
  const { name, petOwner, email, admissionDate, symptoms } = patient;
  return (
    <div className='mx-5 my-8  bg-white shadow-md px-5 py-10 rounded-md'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Pet Name: <span className='font-normal normal-case'>{name}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Pet Name Owner:{' '}
        <span className='font-normal normal-case'>{petOwner}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        email: <span className='font-normal normal-case'>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Admission Date:{' '}
        <span className='font-normal normal-case'>{admissionDate}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Symptoms: <span className='font-normal normal-case'>{symptoms}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button
          type='button'
          className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-10 rounded-md mt-2 cursor-pointer transition-colors uppercase'
        >
          Edit
        </button>
        <button
          type='button'
          className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-10 rounded-md mt-2 cursor-pointer transition-colors uppercase'
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
