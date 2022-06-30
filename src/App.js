import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router"
import Nav from "./components/Nav"
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MobileNav />
      <Nav />
      <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
