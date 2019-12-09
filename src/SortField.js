
import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default class SortField extends Component{
  constructor(){
    super();
    this.state={sortBy:''};
    this.changeSortBy=this.changeSortBy.bind(this);
  }
  changeSortBy(val){
    this.setState({sortBy:val});
  }
  render ()
  {
    let onChange = (e,val)=>{      
      this.props.onChangeCallBck(e.target.value)
      this.changeSortBy(e.target.value);
    };
    const{ lessons } = this.props;
    let sortFlds =[{name:'Duration',value:'duration'},{name:'Publish date',value:'publishDate'}]
    return (    
      <div style={{ width: 300 ,verticalAlign:'bottom',display:'inline-block',margin:'8px'}}>      
      <FormControl >
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"         
          value={this.state.sortBy}
          style={{width:200}}
          onChange={onChange}
        >
          {sortFlds.map(fld=><MenuItem value={fld.value}>{fld.name}</MenuItem>)}          
        </Select>
      </FormControl>
      </div>    
      
    );
  }
}