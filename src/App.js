import './App.css';
import {Routes, Route} from "react-router-dom"
import Loader from './Loader/Loader';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      <Loader/>
    </div>
  );
}

export default App;
