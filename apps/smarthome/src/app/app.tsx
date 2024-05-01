import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {ROUTE} from "./utils/routes";
import {HomePage} from "./pages/HomePage";

export function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: ROUTE.HOME,
          element: <HomePage />,
        },
      ],
    }]);
  return (
    <RouterProvider router={router} />

  );
}

export default App;
