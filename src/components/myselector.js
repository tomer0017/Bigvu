import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import { Button,Container,Row,Col,Nav,Form,NavDropdown,FormControl,Navbar } from 'react-bootstrap';



export default function Myselector(props) {

    const{setselectedOption,clear_flag}=props
    
    const pics = [

        {"name": "Daisi", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png"},
        {"name": "Shiri", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Shiri.png"},
        {"name": "Sarha", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Sarha.png"},
        {"name": "Rivka", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Rivka.png"},
        {"name": "Noa", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Noa.png"},
        {"name": "Erika", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Erika.png"},
        {"name": "Eli", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Eli.png"}
    ]

  useEffect(() => {
   
    setselectedOption('');
  }, [clear_flag]);




const pic = pics.map(pic => pic)  
const handleAddrTypeChange = (e) => setselectedOption(e.target.value)    
return (

    <div>
    
< select 
// defaultValue={value} 
style={{ marginRight: `85px`,width:` 200px`, height: `57px`,  borderRadius:`12px`,backgroundColor:`rgb(206 206 206)`}}
    
      onChange={e => handleAddrTypeChange(e)}
      className="browser-default custom-select" >
         <option value={""}>{"select photo"}</option>)
      {
        pics.map((pic) => 
       
        <option value={pic.value}>{pic.name}</option>)
      }
    </select >
    </div>
    );
    
    }