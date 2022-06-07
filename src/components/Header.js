import dog from '../assets/dog.svg';
import cat from '../assets/cat.svg';

const Header = () => {
  return (
    <>
      <div className='container flex md:mx-auto mt-1  justify-around '>
        <img src={dog} alt='dog.svg' width='60px' />

        <h1 className='font-black text-5xl text-center '>
          Patient Follow-up <span className='text-green-600'>Vet</span>
        </h1>

        <img src={cat} alt='cat.svg' width='60px' />
      </div>
    </>
  );
};

export default Header;
