import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
    </div>
  );
}

export default App;
