import './App.css';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker'

function App() {
  const logo = require('./images/evaluation-studio-logo.png');
  const [value, setValue] = useState(new Date());
  const [submitBtn, setSubmitBtn] = useState(false);
  useEffect(() => {
    //console.log('\n HERE \n',document.querySelector('#esaButtonSubmit').disabled);
    document.querySelector('#esaButtonSubmit').disabled = false;
  });
  return (
    <div className="App" >
      <header className="App-header">
      <img alt='logo' src= {logo}/>
      </header>
      <FormControl >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
        <Grid item xs={12} >
          <Paper elevation={3}  sx={{padding:"10%"}}>
            <FormLabel 
            sx={{
                fontFamily: "'Montserrat', Open Sans",
                fontSize: "medium",
                color: "#2233ff",
              }}
              id="esa-radio-buttons-group-label" 
              asterix='true' required >What is your current gender identity?
            </FormLabel>
            
            <RadioGroup
              aria-labelledby="esa-radio-buttons-group-label"
              name="radio-buttons-group"
              sx={{
                fontFamily: "'Montserrat', Open Sans",
                fontSize: "smaller",
                alignContent: "center" 
              }}
            >
        
            <FormControlLabel value="Girl" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Girl</Typography>}/>
            <FormControlLabel value="Trans Boy" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Trans Boy</Typography>}/>
            <FormControlLabel value="Trans Girl" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Trans Girl</Typography>}/>
            <FormControlLabel value="Non-binary" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Non-binary</Typography>}/>
            <FormControlLabel value="Genderqueer" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Genderqueer</Typography>}/>
            <FormControlLabel value="Different Identity" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Different Identity</Typography>}/>
            <FormControlLabel value="Prefer Not to Say" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Prefer Not to Say</Typography>}/>
            </RadioGroup>
            </Paper>
            </Grid>
       
        <Grid item xs={12}>
        <Paper elevation={3}  sx={{padding:"10%"}}>
          <FormLabel id="esa-radio-buttons-group-label"
          sx={{
            fontFamily: "'Montserrat', Open Sans",
            fontSize: "medium",
            color: "#2233ff"
          }}>
            What is your race/ethnicity?*</FormLabel>
          <RadioGroup
            aria-labelledby="esa-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              fontFamily: "'Montserrat', Open Sans",
              fontSize: "smaller",
              alignContent: "center" 
            }}
          >
            
          <FormControlLabel value="African American" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >African American</Typography>}/>
          <FormControlLabel value="Latino/Hispanic" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Latino/Hispanic</Typography>}/>
          <FormControlLabel value="Asian/Pacific Islander" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Asian/Pacific Islander</Typography>}/>
          <FormControlLabel value="Native American/Alaskan Native" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Native American/Alaskan Native</Typography>}/>
          <FormControlLabel value="Caucasian" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Caucasian</Typography>}/>
          <FormControlLabel value="Other" control={<Radio size="small"/>}label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Other</Typography>}/>
          <FormControlLabel value="Prefer Not to Say" control={<Radio size="small"/>} label={<Typography  fontFamily="'Montserrat', Open Sans"
                fontSize = "smaller"
                alignContent= "center" >Prefer Not to Say</Typography>}/>
          </RadioGroup>
          </Paper>
        </Grid>





        <Grid item xs={12}>
        <Paper elevation={3}  sx={{padding:"10%"}}>
          <FormLabel id="esa-radio-buttons-group-label"
          sx={{
            fontFamily: "'Montserrat', Open Sans",
            fontSize: "medium",
            color: "#2233ff",
            padding: "10px"
          }}>
            What is your Date Of Birth</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                id='esaDOB'
                name='esaDOB'
                value={value}
                onChange={setValue}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
           
          </Paper>
        </Grid> 
        <Grid item xs={12}>
        <Paper elevation={3}  sx={{padding:"10%"}}>
          <Button id='esaButtonSubmit' variant="submit" sx={{
            fontFamily: "'Montserrat', Open Sans",
            fontSize: "xx-large",
            color: "#44ddff",
            padding: "10px",
            borderRadius: "8em",
            backgroundColor:"#4422ff"
          }}>Submit</Button>
          </Paper>
          </Grid>
        
        </Grid>
       </Box>

      </FormControl>
     
    </div>
  );
}

export default App;
