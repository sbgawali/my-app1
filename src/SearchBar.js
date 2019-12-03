
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
export default class SearchBar extends Component{
  render ()
  {
    let onChange = (e,val)=>{      
      this.props.onChangeCallBck(val ? val.name : null)
    };
    const{ lessons } = this.props;
    const dd = {
      options: lessons,
      getOptionLabel: option => option.name,
    };  
    return (    
      <div style={{ width: 300 }}>      
      <Autocomplete
        {...dd}
        id="auto-complete"
        autoComplete
        onChange={onChange}
        includeInputInList
        renderInput={params => (
          <TextField {...params} label="Search Course" margin="normal" fullWidth />
        )}
      />
      </div>    
      
    );
  }
}