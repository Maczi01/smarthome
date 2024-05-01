import { Link } from 'react-router-dom';
import logo from './logo.svg';
import exit from './exit.svg';
import {ROUTE} from "../../../utils/routes";

export const Menu = () => {
  return (
    <nav className="bg-amber-400">
      <div className="max-w-full flex flex-wrap items-center justify-between mx-auto px-8 py-2">
        <div className="flex items-center">
          <img src={logo} alt="Logout" style={{ width: '40px' }} />
          <ul className="flex justify-between list-none ml-4">
            <li className="mx-2">
              <Link to={ROUTE.HOME}>Home Page</Link>
            </li>
          </ul>
        </div>

        <div>
          <img src={exit} alt="Logout" style={{ width: '40px' }} />
        </div>
      </div>
    </nav>
  );
};
