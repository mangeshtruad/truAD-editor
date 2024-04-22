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
  // {
  //   path: "/AdminPannel",
  //   element: <Analyticals />
  // },
  
  // {
  //   path: "/ConfirmNewPass",
  //   element: <ConfirmNewPass />
  // },

  // {
  //   path: "/dashboard",
  //   element: <DashBoardContainer />,
  //   children: [
  //     {
  //       path: "/dashboard/",
  //       element: <Dashhboard />,
  //     },
  //     {
  //       path: "/dashboard/material/",
  //       element: <MaterialManagment />,
  //     },
  //     {
  //       path: "/dashboard/homepage",
  //       element: <HomePage />,
  //     },
  //     {
  //       path: "/dashboard/popularpicks/",
  //       element: <PopularPicks />,
  //     },
  //     {
  //       path: "/dashboard/placepromotion",
  //       element: <PlacePromotion />,
  //     },
  //     {
  //       path: "/dashboard/datareport/",
  //       element: <DataReport />,
  //     },

  //     {
  //       path: "/dashboard/video",
  //       element: <VideoClip />,
  //     },
  //     {
  //       path: "/dashboard/actionpage",
  //       element: <ActionPage />,
  //       children: [
  //         {


  //         }
  //       ]

  //     },
  //     {
  //       path: "/dashboard/invoices",
  //       element: <Invoices />,
  //     },
  //     {
  //       path: "/dashboard/raiseticket",
  //       element: <RaiseTicket />
  //     }

  //   ],
  // },
]);

function App() {
  return (
    <MyContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </MyContextProvider>
  );
}

export default App;
