import React, { useState } from "react";
import { fetchData } from "./util/fetchData";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { codeToCountryMapper } from "./util/codeToCountryMapper";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [countries, setCountries] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const darkModeSwitch = () => {
    setDarkMode(!darkMode);
  };

  fetchData(setCountries);
  let codeToCountryMap = codeToCountryMapper(countries);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <MainLayout darkModeSwitch={darkModeSwitch} darkMode={darkMode} />
        }
      >
        <Route
          index
          element={<HomePage countries={countries} darkMode={darkMode} />}
        />
        <Route
          path="/country/:id"
          element={
            <DetailsPage
              countries={countries}
              codeToCountryMap={codeToCountryMap}
              darkMode={darkMode}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
