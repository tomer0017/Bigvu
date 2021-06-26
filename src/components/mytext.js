import React from 'react';
import { useCallback,useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Nav,Form,NavDropdown,FormControl,Navbar } from 'react-bootstrap';



export default function Mytext(props) {
    const {setuserInput,clear_flag,userInput}=props
    const [debouncedState, setDebouncedState] = useState("");
    


    useEffect(() => {
   
      setuserInput('');
    }, [clear_flag]);




    function textChanging(e) {
         const x=e.target.value
        setTimeout(() => {
          if (x==e.target.value){
            setuserInput(e.target.value)
          }
        }, 500)
    }



// console.log(userInput)
return (

    <div>
    <h1></h1>

    <input
        
        style={{ width:` 200px`, height: `57px`, borderRadius:`12px`,backgroundColor:`rgb(206 206 206)`}}
        placeholder="display text"
      
        onChange={textChanging}
      />

    </div>

    );
    
    }