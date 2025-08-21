import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Notfound from "./pages/404/NotFound";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import Photos from "./pages/gallery/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Notfound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <Notfound />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Notfound />,
  },
  {
    path: "/gallery",
    element: <Photos />,
    errorElement: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
