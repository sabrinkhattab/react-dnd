import React from 'react'
import {Grid , FormControl , MenuItem , InputLabel, Select,TextField,Box ,
      Typography,
      Button
    } from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './CardForm.css'
const CardForm =()=>{
    const [value, setValue] = React.useState(2);

    return (
        <div className="form-wrapper">
            <form>
                <Grid container justify="space-between">
                    <Grid item>
                        <label>
                            Company
                            <input type="checkbox" name="name" />
                        </label>
                    </Grid>
                    <Grid item>
                        <label>
                            individual
                            <input type="checkbox" name="name" />
                        </label>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item>
                        <FormControl style={{minWidth : '170px'}}>
                            <InputLabel id="demo-simple-select-label">Name</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            </Select>
                            
                        </FormControl>
                    </Grid>
                    <Grid item>
                      <VisibilityIcon className="icon-style"/>
                    </Grid>
                    <Grid item>
                      <AddCircleIcon className="icon-style"/>
                    </Grid>
                </Grid>
                
                <Grid container spacing={1}>
                    <Grid item>
                        <FormControl style={{minWidth : '170px'}}>
                            <InputLabel id="demo-simple-select-label">Product</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                            </Select>
                            
                        </FormControl>
                    </Grid>
                    <Grid item>
                      <VisibilityIcon className="icon-style"/>
                    </Grid>
                    <Grid item>
                      <AddCircleIcon className="icon-style"/>
                    </Grid>
                </Grid>
                <TextField id="standard-basic" label="exepected Revenue" />   
                <Grid container justify="space-between" style={{marginTop:'10px'}}>
                   <Grid item>
                    <Box component="fieldset"  borderColor="transparent" style={{padding:0}}>
                            <Typography component="legend">priority</Typography>
                            <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            />
                    </Box>

                   </Grid>
                   <Grid item>
                       <button className="creat-btn">Creat</button>
                   </Grid>
                </Grid>             

            </form>
        </div>
    )
}
export default CardForm;