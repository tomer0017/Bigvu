import React from 'react';
import { useState,useEffect } from 'react';
import Debounce from './debounce.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col,Nav,Form,NavDropdown,FormControl,Navbar } from 'react-bootstrap';



export default function Mytext(props) {
    const {setuserInput}=props
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('');
  // State and setter for search results
  const [results, setResults] = useState([]);
  // State for search status (whether there is a pending API request)
  const [isSearching, setIsSearching] = useState(false);

  // Now we call our hook, passing in the current searchTerm value.
  // The hook will only return the latest value (what we passed in) ...
  // ... if it's been more than 500ms since it was last called.
  // Otherwise, it will return the previous value of searchTerm.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
  const debouncedSearchTerm = Debounce(searchTerm, 5500);

  // Here's where the API call happens
  // We use useEffect since this is an asynchronous action
  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call
        // searchCharacters(debouncedSearchTerm).then(results => {
        //   // Set back to false since request finished
        //   setIsSearching(false);
        //   // Set results state
        //   setResults(results);
        // });
      } else {
        setResults([]);
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );
    
return (

    <div>
    

    <input
        style={{ width:` 200px`, height: `57px`, borderRadius:`12px`,backgroundColor:`rgb(206 206 206)`}}
        placeholder="display text"
        onChange={e => setuserInput(e.target.value)}
      />

      {isSearching && <div>Searching ...</div>}
      {results.map(result => (
        <div key={result.id}>
          <h4>{result.title}</h4>
          <img
            src={`${result.thumbnail.path}/portrait_incredible.${
              result.thumbnail.extension
            }`}
          />
        </div>
      ))}


    </div>








    );
    
    }