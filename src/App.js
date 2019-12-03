import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './appData.json'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CourseList from './CourseList';
import SearchBar from './SearchBar';
import CartBadge from './CartBadge';
export default class App extends React.Component{
  constructor(){
    super()
    this.state={data:Object.values(data).shift().lessons,initialData:Object.values(data).shift().lessons,cartCount:0}
    this.searchCourse=this.searchCourse.bind(this);
    this.changeCartValue=this.changeCartValue.bind(this);
  }
  searchCourse(searchVal){     
     if(searchVal){
       //let filteredData = this.state.initialData.filter((element)=>element.name==searchVal);
       this.setState({data:this.state.initialData.filter((element)=>element.name==searchVal)});
     }
  }
  changeCartValue(lesson,index,type){
    let changedData = this.state.initialData;    
    (type=='add') ? changedData[index].cartEntry=true: changedData[index].cartEntry=false;
    let cartCount = changedData.reduce(function(n, lesson) {
      return n + (lesson.cartEntry == true);
    }, 0);
    this.setState({initialData:changedData,cartCount:cartCount});
  }
  render()
  {
    let lessons = [];
    if(data)
      lessons = this.state.data;
    let initialdata = this.state.initialData;
    let cartCount = this.state.cartCount;
    return (
      <React.Fragment>
        <div style={{float:'right'}}> <CartBadge style={{float:'right'}} cartCount={cartCount}/></div>
        <SearchBar lessons={initialdata} onChangeCallBck={this.searchCourse}/>
        <Container >
          <CourseList  lessons={lessons} changeCartValue={this.changeCartValue}/>
        </Container>
       
     </React.Fragment>
    );
  }
}