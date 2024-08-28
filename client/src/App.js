import { Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AllState from './AllState/AllState'
import Button from '@mui/material/Button';
import GlobalThemeOverride from './theme/GlobalThemeOverride';
import './App.css';

import Home from './Home/Home'
import Trivia from './Trivia/Trivia'
import Search from './Search/Search'

const App = () => {

  return (
    <div className="App">
      <GlobalThemeOverride>
      <Link to='/' ><Button>Home</Button></Link>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/AllState' element={<AllState/>} />
         <Route path='/Search' element={<Search/>} />
         <Route path='/Trivia' element={<Trivia/>} />
       </Routes>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
