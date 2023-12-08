const starterOptions = {
  name: 'Starter',
  price: 150,
  link: 'https://collective2.com/details/145905281',
  drawdown: '35.1%',
  initial_capital: '10,000$',
  annualized: '34.8%',
  monthly: '12.8%',
};
const largerOptions = {
  name: 'Larger',
  price: 250,
  link: 'https://collective2.com/details/145905000',
  drawdown: '33.95%',
  initial_capital: '100,000$',
  annualized: '54.31%',
  monthly: '11.8%',
};

const StrategyCard = (props: any) => {
  const options = { ...props.options };
  return (
    <div className='mx-8 w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8'>
      <h5 className='mb-4 text-xl font-medium text-gray-500 dark:text-gray-400'>
        {options.name}
      </h5>
      <div className='flex items-baseline text-gray-900 dark:text-white'>
        <span className='text-3xl font-semibold'>$</span>
        <span className='text-5xl font-extrabold tracking-tight'>
          {options.price}
        </span>
        <span className='ml-1 text-xl font-normal text-gray-500 dark:text-gray-400'>
          /month
        </span>
      </div>
      <ul role='list' className='my-7 space-y-5'>
        <li className='flex space-x-3'>
          <svg
            className='h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
            Minimal Capital: {options.initial_capital}
          </span>
        </li>
        <li className='flex space-x-3'>
          <svg
            className='h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
            Monthly return: {options.monthly}
          </span>
        </li>
        <li className='flex space-x-3'>
          <svg
            className='h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
            Annualized Return: {options.annualized}
          </span>
        </li>
        <li className='flex items-center space-x-3'>
          <svg
            className='h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-500'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 20 20'
          >
            <path d='M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z' />
          </svg>
          <span className='text-base font-normal leading-tight text-gray-500 dark:text-gray-400'>
            Max Drawdown: {options.drawdown}
          </span>
        </li>
      </ul>
      <a href={options.link} className='block w-full'>
        <button
          type='button'
          className='inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900'
        >
          Copy Strategy
        </button>
      </a>
    </div>
  );
};

const Strategies = () => {
  return (
    <div
      id='strategies'
      className='min-h-[600px] w-full bg-gray-700 py-32 text-gray-100'
    >
      <div className='mx-auto flex max-w-[1024px] max-w-screen-xl flex-col flex-wrap items-center'>
        <div id='performance' className='mb-8 text-5xl text-green-500'>
          Strategies
        </div>
        <div className='mb-4 max-w-[800px] text-center text-xl'>
          Rocket Bot offers multiple strategies.
        </div>
        <div className='mx-auto flex w-[700px]'>
          <StrategyCard options={starterOptions} />
          <StrategyCard options={largerOptions} />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
