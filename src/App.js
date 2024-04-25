import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MyContextProvider } from "./MyContext";

import Analyticals from "./Analyticals"
import AdminPannel from "./Components/AdminPannel.js"
import Page from "./Page.js";
import Editer from "./Editer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page/>,
    children: [
      {
        path: "/adminpanel/",
        element: <AdminPannel />,
      },
      {
        path: "/analyticals/",
        element: <Analyticals />,
      },
      {
        path: "/editer/",
        element: <Editer/>,
      },
    ]
  },
]);

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MyContextProvider>
  );
}

export default App;
