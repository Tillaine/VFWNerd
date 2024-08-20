import { ThemeProvider } from '@mui/material/styles';
import logo from './assets/VFWNerdLogo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ByLawsSearch from './components/ByLawsSearch'
import ByawsTriviaButton from './components/BylawsTriviaButton'
import AllStateChecklist from './components/AllStateCheckList'
import GlobalThemeOverride from './theme/GlobalThemeOverride';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalThemeOverride>
        <Box bgcolor='primary.light'>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <Typography variant='h2' color={'White'} fontFamily={'Roboto'}>
              <Box display='flex' flexDirection='row'>
              VFW
               <a> 
                <Box color="primary.main" > Nerd </Box>
              </a>
              </Box> 
              </Typography>
          <Box display="flex" flexDirection="row">
            <ByLawsSearch/>
            <ByawsTriviaButton/>
            <AllStateChecklist/>
          </Box>
        </header>
        </Box>
      </GlobalThemeOverride>
    </div>
  );
}

export default App;
