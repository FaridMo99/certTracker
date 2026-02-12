import MainLayout from "@/layouts/MainLayout";
import AwsDva from "@/pages/AwsDva";
import AwsSaa from "@/pages/AwsSaa";
import Ckad from "@/pages/ckad";
import HcTfA from "@/pages/hcTfA";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <AwsSaa />,
        path: "awsSaa",
      },
      {
        element: <AwsDva />,
        path: "awsDva",
      },
      {
        element: <HcTfA />,
        path: "hcTfA",
      },
      {
        element: <Ckad />,
        path: "ckad",
      },
    ],
  },
]);


export default router