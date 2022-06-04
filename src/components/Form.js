const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Patient Follow-up</h2>
      <p className='text-lg mt-5 text-center mb-5'>
        Add Patient and{' '}
        <span className='text-indigo-600 font-bold '>Admin</span>
      </p>
      <form className='bg-white shadow-md rounded-md py-10 px-5 ml-5'>
        <div className=''>
          <label
            htmlFor='pet'
            className='block text-gray-700 uppercase font-bold'
          >
            Pet Name{' '}
          </label>
          <input
            type='text'
            id='pet'
            placeholder='Pet Name'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
