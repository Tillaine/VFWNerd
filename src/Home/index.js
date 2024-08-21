import logo from '../assets/VFWNerdLogo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ByLawsSearch from '../components/ByLawsSearch'
import ByawsTriviaButton from '../components/BylawsTriviaButton'
import AllStateChecklist from '../components/AllStateCheckList'

const Home = () => {
  <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
               <Typography variant='h2' color={'White'} fontFamily={'Roboto'}>
                <Box display='flex' flexDirection='row'>
                    VFW
                    <Box color="primary.main" > Nerd </Box>
                </Box> 
                </Typography>
            <Box display="flex" flexDirection="row">
                <ByLawsSearch/>
                <ByawsTriviaButton/>
                <AllStateChecklist/>
            </Box>
        </header>
}

export default Home