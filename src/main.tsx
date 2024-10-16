// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider.tsx";
import FavoritesContext from "./context/FavoriteContext.ts";
import FavoritesContextProvider from "./context/FavoritesContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthContextProvider>
    <FavoritesContextProvider>
      <App />
    </FavoritesContextProvider>
  </AuthContextProvider>
  // </StrictMode>
);
