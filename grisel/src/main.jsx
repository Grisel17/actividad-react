import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { AlumnoProvider } from "./context/AlumnoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AlumnoProvider>
        <App />
      </AlumnoProvider>
    </BrowserRouter>
  </StrictMode>
);