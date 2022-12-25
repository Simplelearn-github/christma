import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Registration } from './Registration';

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Registration' element={<Registration/>} />
          
          
      </Routes>
      </BrowserRouter>
   

    </div>
  );
}

export default App;
