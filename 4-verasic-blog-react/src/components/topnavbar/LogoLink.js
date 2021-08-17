import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LogoLink({ long, short }) {
  return (
    <>
      <Link
        to="./"
        className="hidden md:block my-auto font-head text-xl text-gray-900 font-bold tracking-tighter group dark:text-gray-300"
      >
        {long[0]}
        <span className="text-gray-300 group-hover:text-emerald-400 dark:text-gray-500">{long[1]}</span>
      </Link>

      <Link
        to="./"
        className="block md:hidden my-auto font-head text-xl text-gray-900 font-bold tracking-tighter group dark:text-gray-300"
      >
        {short[0]}
        <span className="text-gray-300 group-hover:text-emerald-400 dark:text-gray-500">{short[1]}</span>
      </Link>
    </>
  );
}

// arrays of string
LogoLink.propTypes = {
  long: PropTypes.arrayOf(PropTypes.string),
  short: PropTypes.arrayOf(PropTypes.string),
};
// set default value (in case i forgot what is this thing. lol)
LogoLink.defaultProps = {
  long: ['Verasic', 'Story'],
  short: ['V', 'S'],
};

export default LogoLink;
