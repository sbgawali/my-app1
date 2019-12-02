import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './appData.json'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CourseList from './CourseList'
class App extends React.Component{
  constructor(){
    super()
    this.state={data:data}
  }
  render()
  {
    console.log({...[...data]})
    return (
      <React.Fragment>
        <Container >
        <CourseList  {...data}/>
        </Container>
     </React.Fragment>
    );
  }
}

export default App;
