import { Button,Container,Row,Col,Nav,Form,Dropdown,NavDropdown,FormControl,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './components/canvas.js';
import Canvas23 from './components/canvas23.js';
import Myselector from './components/myselector.js';
import Mytext from './components/mytext.js';

import { useState,useEffect } from 'react';
import './App.css';
import Select from 'react-select';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

 
  const [borderColor, setborderColor] = useState();
  const [userInput,setuserInput]=useState("");
  const [selectedOption,setselectedOption]=useState(""); 
  const [clear_flag,setclear_flag]=useState("");

    
  const handleAddrTypeChange = (e) => setselectedOption(e.target.value)

 
  // useEffect(() => {
   
  //   setselectedOption('');
  // }, [path]);


  function Home() {
    return <h1>please choose frame color</h1>;
  }
  
  function Blue_init() {
    
    setclear_flag("blue")
    return <br/> ;
  }
  
  function White_init() {
   
    setclear_flag("white")
    
    return <br/> ;
  }

  function Canvas23_init() {
   
    setclear_flag("canvas23")
    
    return <br/> ;
  }
  

    
  // function New_mode() {
   
  //   if (clear_flag==""){

  //    setclear_flag(false) 
  //   }

  //   else {
  //     setclear_flag("") 
  //   }
    
    
  //   return <br/> ;
  // }



      // fetch(
      //   "https://bigvu-interviews-assets.s3.amazonaws.com/presenters.json",
      //   { mode: 'cors' },
      //   {
      //     method: "GET",
      //     headers: {
      //       "access-control-allow-origin" : "*",
      //       "Content-type": "application/json; charset=UTF-8"
      //     },
      //   }
      // ).then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);

      // })
 

  return (

    <div className="App">

      <Router>
      <div >
    
        <Navbar bg="primary" variant="dark" style={{ background:`linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)`}} >
    {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    <Nav style={{margin:`auto`,    fontSize: `25px`,fontWeight: `700`}} className="mr-auto">
    {/* <Link to="/">    <Nav.Link to="/" href="#home">Home</Nav.Link></Link> */}
   
      <Link to="/white">  <Nav.Link to="/about" href="#features">White</Nav.Link></Link>
      <Link to="/blue">  <Nav.Link  href="#pricing">Blue</Nav.Link></Link>
      <Link to="/2_3">  <Nav.Link  href="#2/3mode">2/3</Nav.Link></Link>
 
    </Nav>
  </Navbar>
        <Switch>
          <Route  path="/white">
     
            <White_init/>
           
          <div className="buttons">

            <Myselector  clear_flag={clear_flag} setselectedOption={setselectedOption}   />
            <Mytext userInput={userInput} clear_flag={clear_flag} setuserInput={setuserInput} />
            </div>
            {selectedOption && 
            <Canvas  userInput={userInput}  selectedOption={selectedOption} borderColor={"20px solid rgb(255, 255, 255)"}/>
            }
          </Route>
          <Route  path="/blue"  >
         
          <Blue_init/> 
        
            <div className="buttons">
             
            <Myselector  clear_flag={clear_flag} setselectedOption={setselectedOption}   />
            <Mytext userInput={userInput} clear_flag={clear_flag} setuserInput={setuserInput} />
            </div>
        {selectedOption &&  
        <Canvas  userInput={userInput}  selectedOption={selectedOption} borderColor={"20px solid rgb(44, 144, 238)"}/>
         } 
         
         </Route>

         <Route  path="/2_3"  >
         
         <Canvas23_init/> 
       
           <div className="buttons">
            
           <Myselector  clear_flag={clear_flag} setselectedOption={setselectedOption}   />
           <Mytext userInput={userInput} clear_flag={clear_flag} setuserInput={setuserInput} />
           </div>
       {selectedOption &&  
       <Canvas23  userInput={userInput}  selectedOption={selectedOption} borderColor={"20px solid rgb(44, 144, 238)"}/>
        } 
        
        </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}




export default App;
