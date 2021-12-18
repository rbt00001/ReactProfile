import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ContactMe from "./Components/ContactMe";
import MyProjects from "./Components/MyProjects";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div className="App">
      <div>
        <h1> Hello World</h1>
      </div>
      <BrowserRouter>
        <Header />
        <Navbar />

        {/* 
        <Switch>
          <Route exact path="/">
            {AboutMe}
          </Route>
        </Switch> }
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
