/* eslint-disable no-unused-vars */
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Table from './components/table/table';
import Cards from './components/cards/cards';
import Buttons from './components/buttons/buttons';
import Textfields from './components/textfields/textfields';


function App() {
  return (
    <div className="App">      
      <Navbar />
      <h1 class="h1" >MY TABLE</h1>
      <Table />
      <h1 class="h1" >MY CAR</h1>
      <div class="cards">
        <div class="card">
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
        <div>
          <Cards />
        </div>
      </div>
      <h1 class="h1" >MY BUTTONS</h1>
      <Buttons />
      <h1 class="h1" >MY TEXTFIELDS</h1>
      <Textfields />
      <h1 class="h1" >MY ROUTING</h1>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <Table />
          </Route>
          <Route path="/users">
            <Cards />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
