import Home from './Components/Home';
import Signin from './Components/Signin';
import './styles/signin.css';
import './App.css';
import Stopwatch from './Components/Stopwatch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ChildContextApi from './Components/ContextApi';
import ContextApi from './Components/ContextApi';
import Practice from './Components/Practice';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/stopwatch' element={<Stopwatch/>} />
          {/* <Route path='/context' element={<ContextApi />} /> */}
          <Route path='/context' element={<Practice />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
