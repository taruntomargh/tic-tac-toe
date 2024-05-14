import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import GamePage from "./pages/GamePage";
// import "./App.css";

let arrValue = new Array(9);

function App() {

  const router = createBrowserRouter([
    {
      path: "login",
      element: <LoginPage />
    },
    {
      path: "register",
      element: <RegisterPage />
    },
    {
      path: "/",
      element: <GamePage />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
