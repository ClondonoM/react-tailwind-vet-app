const Error = ({ children }) => {
  return (
    <p className='bg-red-600 text-white text-center uppercase font-bold p-3 mb-5 rounded-md'>
      {children}
    </p>
  );
};

export default Error;
