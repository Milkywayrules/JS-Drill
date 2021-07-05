/**
 *
 * @returns
 */
export default function NavHeader() {
  return (
    <nav className="w-full px-20 py-10 shadow-sm">
      <div className="mx-auto flex justify-between max-w-screen-xl text-gray-700">
        <a
          href="./"
          className="my-auto font-head text-xl text-gray-900 font-bold tracking-tighter group"
        >
          Verasic
          <span className="text-gray-300 group-hover:text-emerald-400">Story</span>
        </a>
        <div className="flex gap-10">
          <a href="/" className="px-1 font-semibold hover:text-gray-300">
            Home
          </a>
          <a href="/story" className="px-1 font-semibold hover:text-gray-300">
            Story
          </a>
          <a href="/portfolio" className="px-1 font-semibold hover:text-gray-300">
            Portfolio
          </a>
          <a href="/contact" className="px-1 font-semibold hover:text-gray-300">
            Contact
          </a>
          <button id="dark-mode-btn" className="" title="Toggle dark mode" type="button">
            {/* moon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 block text-gray-700 dark:hidden"
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
              className="h-6 w-6 hidden text-white dark:block"
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
