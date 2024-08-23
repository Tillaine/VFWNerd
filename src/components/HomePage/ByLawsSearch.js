
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LandingPageCard from './LandingPageCard';


function ByLawsSearch() {
  return (
    <div className="ByLawsSearch">
         <LandingPageCard>

            <Typography> Bylaws Question </Typography>
            <TextField id="outlined-basic" label="Question" variant="outlined" />
          </LandingPageCard>
    </div>
  );
}

export default ByLawsSearch;
