
import React from 'react';
import Link from '../link/link'
import './navbar.css'
//class component  >>>>lifecycle hooks  , state

class Navbar extends React.Component {

  constructor() {
     
    super();
    this.state={
        counter:1,
        colorClass:"nav",
        x:100
    }
    console.log("from constructor")//1
  }

  componentDidMount() {

    console.log("from componentDidMount")//3

  }
  componentDidUpdate() {//update
       

    console.log("from componentDidUpdate");


  }
  componentWillUnmount() {
    //clean up
    console.log("from componentWillUnmount")

  }
  handleIncreament=(y)=>{
    console.log(y)
    this.setState({counter:++this.state.counter});
    this.setState({colorClass:"nav1"});

  //this.setState({x:50})

  }

  render() {
  
    console.log(this.props)
    console.log("from render")//2
    return(
      <>
       <p className={this.state.colorClass} >{this.state.counter}</p>
    
       <button onClick={()=>{this.handleIncreament(3)}}>Increase counter</button>

     <Link url="#home" name="Home"  />
     <Link url="#about" name="About us" />
     <Link url="#contact" name="contact us" />
     <Link url="#project" name="Projects" />
      </>

    )
    


  }



}


export default Navbar;