import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/route";
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter(ROUTES);

function App() {
  const helmetContext = {};
  return (
    <HelmetProvider context={helmetContext}>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;