
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default class SearchBar extends Component{
  render ()
  {
    let onChange = (e,val)=>{
     // console.log('onchange');
      this.props.onChangeCallBck(val)
    };
    const{ lessons } = this.props;
    return (    
      <div style={{ width: 300 }}>      
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={lessons.map(option => option.name)}
          onChange={onChange}
          renderInput={params => (
            <TextField
              {...params}
              label="Search input"
              margin="normal"
              variant="outlined"
              fullWidth
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </div>);
  }
}