import { NavLink } from 'react-router-dom';

import { useDarkMode } from '../../hooks/modules';

import LogoLink from './LogoLink';

export default function NavHeader() {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  return (
    <nav className="w-full px-10 md:px-24 py-10 md:shadow-sm">
      <div className="mx-auto flex justify-between max-w-screen-xl text-gray-700">
        <LogoLink />
        <div className="flex gap-3 md:gap-10">
          <NavLink exact to="./" activeClassName="border-b-2 border-emerald-400" className="my-1 md:my-0 px-1 font-semibold hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-700">
            Home
          </NavLink>
          <NavLink to="./story" activeClassName="border-b-2 border-emerald-400" className="my-1 md:my-0 px-1 font-semibold hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-700">
            Story
          </NavLink>
          <NavLink to="./portfolio" activeClassName="border-b-2 border-emerald-400" className="my-1 md:my-0 px-1 font-semibold hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-700">
            Portfolio
          </NavLink>
          <button
            id="dark-mode-btn"
            className=""
            title="Toggle dark mode"
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {/* moon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block text-gray-700 hover:text-gray-300 dark:hidden"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            {/* /moon */}
            {/* sun */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hidden text-gray-300 hover:text-gray-700 dark:block"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            {/* /sun */}
          </button>
        </div>
      </div>
    </nav>
  );
}
