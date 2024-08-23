import GlobalThemeOverride from './theme/GlobalThemeOverride';
import './App.css';

import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <GlobalThemeOverride>
        <Home/>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
