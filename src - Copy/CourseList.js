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
export default class CourseList extends Component{
    constructor(){
        super();
        //this.state={data:data}
    }
   render(){
    const useStyles = makeStyles({
        card: {
          maxWidth: 100,
          width:150
        },
      });

      //this.props[0].lessons.map((e)=> console.log(e))
       console.log(this.props)

       return <div>
           <Box display="flex" flexDirection="row" p={1} bgcolor="background.paper">
           {this.props[0].lessons.map((lesson, index) => (
            <Box  p={2} m={2} bgcolor="grey.300"><Card style={{width:220,height:420}}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"               
                image={lesson.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h6">
                {lesson.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                {lesson.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <span style={{fontWeight:'bold'}}> Duration :</span>{lesson.duration}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                <span style={{fontWeight:'bold'}}> Publish Date : </span>{lesson.publishDate}
                </Typography>                
              </CardContent>
            </CardActionArea>
            
          </Card></Box>
             ))}
      </Box>
           
           
           
           
           </div>
   }


}