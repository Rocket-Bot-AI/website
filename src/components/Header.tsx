const Header = () => {
  return (
    <header>
      <nav class='border-gray-200 bg-white px-4 py-2.5 dark:bg-gray-800 lg:px-6'>
        <div class='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
          <div
            class='hidden w-full items-center justify-between lg:flex lg:w-auto'
            id='mobile-menu-2'
          >
            <a href='https://flowbite.com' class='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                class='mr-3 h-6 sm:h-9'
                alt='Flowbite Logo'
              />
              <span class='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                RocketBot
              </span>
            </a>
          </div>
          <ul class='mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8'>
            <li>
              <a
                href='#'
                class='lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white'
              >
                Strategies
              </a>
            </li>
            <li>
              <a
                href='#'
                class='lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                class='lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white'
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Header;
