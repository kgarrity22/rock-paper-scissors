import * as ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./style.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { RPSHeader, RPSLogic } from "./features";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RPSHeader />,
        children: [
          { path: "", element: <RPSLogic /> },
          { path: "restart", element: <Navigate to="/" /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
