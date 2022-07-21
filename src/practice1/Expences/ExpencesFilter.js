import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const ExpencesFilter = (props) => {
  const dropDownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
    console.log(e.target.value)
  }
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl >
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.selected}
        label="Filter By Year"
        onChange={dropDownChangeHandler}
      >
        <MenuItem value='2019'>2019</MenuItem>
        <MenuItem value='2020'>2020</MenuItem>
        <MenuItem value='2021'>2021</MenuItem>
        <MenuItem value='2022'>2022</MenuItem>

        
      </Select> 
    </FormControl>
    </Box>
  );
};

export default ExpencesFilter;
