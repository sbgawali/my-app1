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
import CourseListItem from './CourseListItem';
export default class CourseList extends Component{
    constructor(){
        super();
        
    }
    render(){
        const{ lessons, changeCartValue} = this.props;
        return(<div>
            <Box display="flex" flexDirection="row" p={1} bgcolor="background.paper">
                {lessons.map((lesson, index) => (
                    <Box  p={2} m={2} bgcolor="grey.300">
                        <CourseListItem key={index} lesson={lesson} index={index} changeCartValue={changeCartValue}/>
                    </Box>
                ))}
            </Box>
        </div>);
    }
}