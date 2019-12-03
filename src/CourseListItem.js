import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { logicalExpression } from '@babel/types';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
export default class CourseListItem extends Component{
    constructor(){
        super();
        this.state={show:false,anchorEl: null };
        this.addToCart=this.addToCart.bind(this);
    }
    addToCart(lesson,index,type){
        if(this.props.changeCartValue){
            this.props.changeCartValue(lesson,index,type);
        }
    }
    render(){
        const handleClick = event => {
        //setAnchorEl(event.currentTarget);
            this.setState({show:true,anchorEl: event.currentTarget });

        };    
        const handleClose = () => {
            this.setState({show:false,anchorEl: null})
        };       
        const {lesson,index} = this.props;
        let addRemoveBtn = <Button variant="contained" color="primary" onClick={(e) => this.addToCart(lesson,index,'add')}>Add</Button>;
        if(lesson.cartEntry)
            addRemoveBtn = <Button variant="contained" color="secondary" onClick={(e) => this.addToCart(lesson,index,'remove')}>Remove</Button>
        return(
            <React.Fragment>

                <Card style={{width:220,height:420}} aria-controls="simple-menu" aria-haspopup="true" onMouseEnter={handleClick} >
                <CardActionArea >
                    <CardMedia
                        component="img"
                        alt={lesson.name}             
                        image={lesson.image}
                        title={lesson.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h6">{lesson.name}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{lesson.description}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p"> <span style={{fontWeight:'bold'}}> Duration :</span>{lesson.duration}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p"><span style={{fontWeight:'bold'}}> Publish Date : </span>{lesson.publishDate}</Typography>                
                    </CardContent>
                </CardActionArea>            
                </Card>
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    open={this.state.show}
                    onClose={handleClose}
                >
                <MenuItem onClick={handleClose} onMouseLeave={handleClose}>
                    {addRemoveBtn}
                </MenuItem>
                    
                </Menu>




            </React.Fragment>)
    }


}