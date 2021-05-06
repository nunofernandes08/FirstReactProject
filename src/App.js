import './App.css';

import Navbar from './components/navbar/navbar';
import Table from './components/table/table';

function App() {
  return (
    <div className="App">      
      <Navbar />
      <h1 class="h1" >MY TABLE</h1>
      <Table />
    </div>
  );
}

export default App;
