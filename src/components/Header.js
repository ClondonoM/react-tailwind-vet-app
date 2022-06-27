import dog from '../assets/dog.svg';
import cat from '../assets/cat.svg';

const Header = () => {
  return (
    <>
      <div className='container flex md:mx-auto mt-1  justify-around '>
        <img src={dog} alt='dog.svg' width='60px' />
        <div className='text-center'>
          <h1 className='font-black text-5xl text-center '>
            Patient Follow-up <span className='text-green-600 '>Vet</span>
          </h1>
          <br />
          <div>
            <a
              className='text-lg'
              href='https://carlos-londono.dev/'
              target='_blank'
              rel='noreferrer'
            >
              by{' '}
              <span className='text-green-600 font-bold'>
                carlos-londono.dev
              </span>{' '}
            </a>
          </div>
        </div>

        <img src={cat} alt='cat.svg' width='60px' />
      </div>
    </>
  );
};

export default Header;
