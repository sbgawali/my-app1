import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import CourseListItem from './CourseListItem';
export default class CourseList extends Component{    
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