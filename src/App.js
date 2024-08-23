import Box from '@mui/material/Box';
import GlobalThemeOverride from './theme/GlobalThemeOverride';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <div className="App">
      <GlobalThemeOverride>
        <Box bgcolor='primary.light'>
        <HomePage/>
        {/* add switch between home, search, checklist, triva */}
        </Box>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
