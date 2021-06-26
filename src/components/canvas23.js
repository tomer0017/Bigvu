import React from 'react';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Nav,Form,NavDropdown,FormControl,Navbar } from 'react-bootstrap';



export default function Canvas23(props) {
const {borderColor,selectedOption,userInput}=props
const [autofontSize,setautofontSize]=useState("")
const [temp,settemp]=useState(50)
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


useEffect(() => {
    // var temp=0
    // if (userInput.length>110) temp= (100-(userInput.length/4))/100;
    // else temp= (100-(userInput.length/6))/100;

    // const temp= (100-(userInput.length/3))/100
    
    // 40*(0.8*userInput.length)
   
    
   var y=document.getElementById('text_area').clientHeight

   if (userInput.length<30){
    settemp(50)  
   } 
   else{
             if (y>280) {
                 settemp(temp*0.9)
       
             }
             else if (180<y<240) {
             settemp(temp+1)  
            } 

   }
 

    console.log(temp)
    console.log(userInput.length)
    setautofontSize(temp);

    console.log(document.getElementById('text_area').clientHeight)
    },[userInput]);


return (

<div>
<Container> 
{/* border: 10px solid rgb(177, 51, 51);  */}
<div  className="slid">  
<Row>
 <Col md={8} > 
 <img style={{borderRadius: `12px`}} src={selectedOption} ></img>
 </Col> 

 <Col md={4}  style={{borderRadius: `0px 12px 12px 0px`,backgroundColor : `white`}}>
<h1 id="text_area" style={{"font-size": autofontSize ,fontSizefontWeight: `700`,width: `185px`,wordWrap: `break-word`,transform: `translate(-50%,-50%)`,position: `absolute`,top: `46%`, left: `50%`,fontFamily: `'Inter', sans-serif`, textAlign:"center",color:"#1e3567"}}>{userInput}</h1> 
 </Col>
 </Row>

</div>  
</Container>     
</div>
);

}