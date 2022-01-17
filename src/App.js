import './App.css';
import Navbar from './components/navbar/navbar';
import RegForm from './components/Form'
import { Route , Switch , BrowserRouter as Router } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <>
   <h1>Hello</h1>
   <Router>
     <Switch >
      <Navbar test="mona"/>
      <RegForm />
      <Footer/>
     </Switch>
   </Router>

   </>
  );
}

export default App;
