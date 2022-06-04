const Patient = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-md'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Pet Name: <span className='font-normal normal-case'>Hook</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Pet Name Owner: <span className='font-normal normal-case'>Carlos</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        email: <span className='font-normal normal-case'>carlos@gmail.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Admission Date:{' '}
        <span className='font-normal normal-case'>04/06/2022</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Symptoms:{' '}
        <span className='font-normal normal-case'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
          temporibus eos expedita at suscipit vel explicabo delectus doloremque
          ratione aspernatur, quam cupiditate sint eum molestiae porro. Ad sed
          non quas?
        </span>
      </p>
    </div>
  );
};

export default Patient;
