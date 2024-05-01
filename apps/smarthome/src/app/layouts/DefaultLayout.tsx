import { Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import {Aside} from "./components/Aside";

export const DefaultLayout = () => {
  return (
    <div className="ml-64">
      <Aside />
      <Menu />
      <div className="ml-64 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};
