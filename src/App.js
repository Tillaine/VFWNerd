import GlobalThemeOverride from './theme/GlobalThemeOverride';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AllState from './AllState/AllState'
import './App.css';

import Home from './Home/Home'
import Trivia from './Trivia/Trivia'
import Search from './Search/Search'

const App = () => {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <GlobalThemeOverride>
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
