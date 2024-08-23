import logo from '../../assets/VFWNerdLogo.png';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ByLawsSearch from './ByLawsSearch'
import ByawsTriviaButton from './BylawsTriviaButton'
import AllStateCheckListButton from './AllStateCheckListButton'


const HomePage = () => {
  <Box>
    Yo
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
                <AllStateCheckListButton/>
            </Box>
        </Box>
}

export default HomePage;