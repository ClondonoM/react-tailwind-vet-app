const Error = ({ message }) => {
  return (
    <p className='bg-red-600 text-white text-center uppercase font-bold p-3 mb-5 rounded-md'>
      {message}
    </p>
  );
};

export default Error;
