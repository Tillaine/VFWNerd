import logo from './assets/VFWNerdLogo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ByLawsSearch from './components/ByLawsSearch'
import ByawsTriviaButton from './components/BylawsTriviaButton'
import AllStateChecklist from './components/AllStateCheckList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Typography fontFamily={'Roboto'}>VFW Nerd</Typography>
        <Box display="flex" flexDirection="row">
          <ByLawsSearch/>
          <ByawsTriviaButton/>
          <AllStateChecklist/>
        </Box>
      </header>
    </div>
  );
}

export default App;
