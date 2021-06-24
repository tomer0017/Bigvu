import { Button,Container,Row,Col,Nav,Form,Dropdown,NavDropdown,FormControl,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Canvas from './components/canvas.js';
import Myselector from './components/myselector.js';
import Mytext from './components/mytext.js';
import Debounce from './components/debounce.js';
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
  const [selectedOption,setselectedOption]=useState("https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png");

    
      const handleAddrTypeChange = (e) => setselectedOption(e.target.value)

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

 
    </Nav>
  </Navbar>
        <Switch>
          <Route path="/white">
          <div className="buttons">
            <Myselector   setselectedOption={setselectedOption}   />
            <Mytext  setuserInput={setuserInput} />
            </div>
            <Canvas  userInput={userInput}  selectedOption={selectedOption} borderColor={"20px solid rgb(255, 255, 255)"}/>
          </Route>
          <Route path="/blue">
            <div className="buttons">
            <Myselector   setselectedOption={setselectedOption}   />
            <Mytext setuserInput={setuserInput} />
            </div>
            <Canvas  userInput={userInput}  selectedOption={selectedOption} borderColor={"20px solid rgb(44, 144, 238)"}/>
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

function Home() {
  return <h1>please choose frame color</h1>;
}


export default App;
