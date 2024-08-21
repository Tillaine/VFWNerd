import Box from '@mui/material/Box';
import GlobalThemeOverride from './theme/GlobalThemeOverride';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <GlobalThemeOverride>
        <Box bgcolor='primary.light'>
        <Home/>
        {/* add switch between home, search, checklist, triva https://v5.reactrouter.com/web/example/basic */}
        </Box>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
