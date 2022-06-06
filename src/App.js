import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router"
import Nav from "./components/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Router></Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
