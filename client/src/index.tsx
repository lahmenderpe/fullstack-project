import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/appContext";
import { TranslationProvider } from "./context/translationContext";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <AuthProvider>
        <TranslationProvider>
          <Router>
            <App />
          </Router>
        </TranslationProvider>
      </AuthProvider>
    </AppProvider>
  </React.StrictMode>
);
