import { Navegation } from "./components/Navegation";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navegation />
      <Router />
    </BrowserRouter>
  );
}

export default App;
