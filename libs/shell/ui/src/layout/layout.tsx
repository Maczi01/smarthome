import {Outlet} from 'react-router-dom';
import {Aside} from '../aside';
import {ReactNode} from 'react';

type LayoutProps = {
  navbarSlot?: ReactNode;
};

export const Layout = ({ navbarSlot }: LayoutProps) => {
  return (
    <div className="ml-64">
      <Aside />
      {navbarSlot}
      <div className="ml-64 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};
