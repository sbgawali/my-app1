import React from 'react';
import './App.css';
import data from './appData.json';
import Container from '@material-ui/core/Container';
import CourseList from './CourseList';
import SearchBar from './SearchBar';
import CartBadge from './CartBadge';
import LoginDialog from './LoginDialog';
export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:Object.values(data).shift().lessons,
      initialData:Object.values(data).shift().lessons,
      cartCount:0,
      loggedIn:false,
      openDialog:false
    };
    this.searchCourse=this.searchCourse.bind(this);
    this.changeCartValue=this.changeCartValue.bind(this);
    this.checkLogin=this.checkLogin.bind(this);
    this.closeLoginDialog=this.closeLoginDialog.bind(this);
    
  }
  checkLogin(){
    this.setState({loggedIn:true});
  }
  searchCourse(searchVal){  
    let initialdata = this.state.initialData;
     let filteredData = searchVal ? initialdata.filter((element)=>element.name==searchVal) : initialdata;
     this.setState({data:filteredData});
  }
  changeCartValue(lesson,index,type){
    let changedData = this.state.initialData;    
    (type=='add') ? changedData[index].cartEntry=true: changedData[index].cartEntry=false;
    let cartCount = changedData.reduce(function(n, lesson) {
      return n + (lesson.cartEntry == true);
    }, 0);
    this.setState({initialData:changedData,cartCount:cartCount});
    if(!this.state.loggedIn && !this.state.openDialog){
      this.checkLogin();
      this.setState({openDialog:true});

    }
  }
  closeLoginDialog(){
    this.setState({openDialog:false});
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
        <Container >
        <div style={{float:'right'}}> 
          <CartBadge style={{float:'right'}} cartCount={cartCount}/>
        </div>
        <LoginDialog closeLoginDialog={this.closeLoginDialog} {...this.state} />
        <h2>Course Details</h2>
        <SearchBar lessons={initialdata} onChangeCallBck={this.searchCourse}/>
        <Container >
          <CourseList  lessons={lessons} changeCartValue={this.changeCartValue}/>
        </Container>
        </Container >
     </React.Fragment>
    );
  }
}