import GlobalThemeOverride from './theme/GlobalThemeOverride';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <GlobalThemeOverride>
      <Routes>
         <Route path='/' element={<Home/>} />
         {/* <Route path='/AllState' element={<AllState/>} /> */}
         {/* <Route path='/Search' element={<Search/>} /> */}
         {/* <Route path='/Trivia' element={<Trivia/>} /> */}
       </Routes>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
