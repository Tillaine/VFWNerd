import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LandingPageCard from './LandingPageCard';


function AllStateChecklist() {
  return (
    <div className="ByLawsSearch">
         <LandingPageCard>
            <Typography> All State Check List </Typography>
            <Button>Play</Button>
          </LandingPageCard>
    </div>
  );
}

export default AllStateChecklist;
