import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import "./index.css";

import Index from "./routes";
import Home from "./routes/home";
import PrivacyPolicy from './routes/privacyPolicy';
import TermsConditions from './routes/termsConditions';
import ErrorPage from "./routes/errorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Index />}
      errorElement={<ErrorPage />}
    >
      <Route
        index
        element={<Home />}
      />
      <Route
        path="/privacy"
        element={<PrivacyPolicy />}
      />
      <Route
        path="/terms"
        element={<TermsConditions />}
      />
    </Route>
  )
);

// Remover <React.StrictMode> because it makes the eseEffect() render twice
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
