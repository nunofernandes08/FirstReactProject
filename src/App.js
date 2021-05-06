import './App.css';

import Navbar from './components/navbar/navbar';
import Table from './components/table/table';
import Cards from './components/cards/cards';

import Buttons from './components/buttons/buttons';


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
    </div>
  );
}

export default App;
