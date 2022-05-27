import { Navegation } from "./components/Navegation";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { SearchProvider } from "./context/SearchContext";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Navegation />
        <Router />
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
