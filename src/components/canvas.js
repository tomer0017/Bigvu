import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Nav,Form,NavDropdown,FormControl,Navbar } from 'react-bootstrap';



export default function Canvas(props) {
const {borderColor,selectedOption,userInput}=props
const pics = [

    {"name": "Daisi", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png"},
    {"name": "Shiri", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Shiri.png"},
    {"name": "Sarha", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Sarha.png"},
    {"name": "Rivka", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Rivka.png"},
    {"name": "Noa", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Noa.png"},
    {"name": "Erika", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Erika.png"},
    {"name": "Eli", "value": "https://bigvu-interviews-assets.s3.amazonaws.com/images/Eli.png"}
]

// alert(userInput)
return (

<div>
<Container> 
{/* border: 10px solid rgb(177, 51, 51);  */}
<div style={{backgroundImage:`url(${selectedOption})`,border:`${borderColor}`}} className="slid">  
 
<h1 style={{fontFamily: `'Inter', sans-serif`, textAlign:"center",color:"white"}}>{userInput}</h1> 


</div>  
</Container>     
</div>
);

}