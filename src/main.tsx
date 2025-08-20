import { createContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Store from "./store/Store.ts";
const store = new Store();

export const Context = createContext({
  store,
});
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <Context.Provider
    value={{
      store,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
  // </StrictMode>
);
