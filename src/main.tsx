import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { RPS } from "./features";
import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [{ path: "/", element: <RPS /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
