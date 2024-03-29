import App from "@/App";
import Dashboard from "@/components/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: "/",
            element: <Dashboard/>
        }
      ]
    },
  ]);