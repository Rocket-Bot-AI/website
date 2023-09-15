const Header = () => {
  return (
    <header>
      <nav className='border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
        <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <div
            className='hidden w-full items-center justify-between lg:flex lg:w-auto'
            id='mobile-menu-2'
          >
            <a href='https://flowbite.com' className='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='mr-3 h-6 sm:h-9'
                alt='Flowbite Logo'
              />
              <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                RocketBot
              </span>
            </a>
          </div>
          <ul className='mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
            <li>
              <a
                href='#performance'
                className='lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white'
              >
                Performance
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
