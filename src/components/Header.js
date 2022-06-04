import dog from '../assets/dog.svg';
import cat from '../assets/cat.svg';

const Header = () => {
  return (
    <>
      <div className='container flex mb-5 justify-around '>
        <img src={dog} alt='dog.svg' width='80px' />
        <img src={cat} alt='cat.svg' width='80px' />
      </div>
      <h1 className='font-black text-5xl text-center w-2/3 md:mx-auto'>
        Patient Follow-up <span className='text-green-600'>Vet</span>
      </h1>
    </>
  );
};

export default Header;
