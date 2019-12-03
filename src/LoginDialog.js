import React, {Component} from 'react';
import {Button,TextField,Dialog ,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';

export default class LoginDialog extends Component {

    constructor(){
        super()
        this.state = { open: false,userName:'' ,msg:''};
        this.handleOpen=this.handleOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.onChangeField=this.onChangeField.bind(this)
    }

    handleOpen() {
        this.setState({ open: true});
    }

    handleClose() {
        this.props.closeLoginDialog();
        let msg =` Welcome ${this.state.userName}`;
        this.setState({msg:msg})
    }
    onChangeField(e){        
        this.setState({userName:e.target.value})
    }
    
    render(){
        let messageStyle={
         fontWeight:'bold',
         float:'right',
         color:'red',
         padding:20
        }
        return (
            <div>
              <span style={messageStyle}> 
                {this.state.msg}
              </span>
              <Dialog open={this.state.open || this.props.openDialog} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    onChange={this.onChangeField}
                  />
                  <TextField                    
                    margin="dense"
                    id="password"
                    label="password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>
                <DialogActions>                  
                  <Button onClick={this.handleClose} color="primary">
                    Login
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          );
    }
  
}
