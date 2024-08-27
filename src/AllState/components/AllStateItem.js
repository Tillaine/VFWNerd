import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import { useState } from 'react';

const AllStateItem = ({itemName, status, description}) => {

const [infoOpen, setInfoOpen] = useState(false)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box height='40px' ml='40%' display='flex' flexDirection='row' key={itemName} className="Item">
            <Checkbox checked={status} {...label} />
            <Box color={status ? 'primary.main' : 'white'} mt={1}>
                <Typography> {itemName} </Typography>
            </Box>
            <Box onClick={() => setInfoOpen(!infoOpen)} color='secondary.main' m={1}>
                <InfoIcon fontSize="small" />
            </Box>
            {infoOpen && <Box>{description}</Box>  }

    </Box>
  );
}

export default AllStateItem;
