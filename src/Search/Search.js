import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';




const Search = () => {
  return (
    <div className="App">
        <Box bgcolor='primary.light'>
            <Typography variant="h1" >All State Checklist</Typography>
            <Typography> Bylaws Question </Typography>
            <TextField id="outlined-basic" label="Question" variant="outlined" />
        </Box>
    </div>
  );
}

export default Search;

