import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
import { RPS } from "./features";

const router = createBrowserRouter([
  {
    path: "",
    element: <RPS />,
    // children: [{ path: "/", element: <></> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
