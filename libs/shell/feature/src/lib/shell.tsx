import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {Layout, Menu} from '@smarthome/shell/ui';
import {Home} from "@smarthome/feature";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout
        navbarSlot={<Menu />}
      />
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
]);

export function Shell() {
  return <RouterProvider router={router} />;
}

export default Shell;
