import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LandingPageCard from './LandingPageCard';


function BylawsTriviaButton() {
  return (
    <div className="ByLawsSearch">
         <LandingPageCard>
            <Typography> Bylaws Trivia </Typography>
            <Button>Play</Button>
          </LandingPageCard>
    </div>
  );
}

export default BylawsTriviaButton;
