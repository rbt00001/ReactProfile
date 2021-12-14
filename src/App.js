import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            {About}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
