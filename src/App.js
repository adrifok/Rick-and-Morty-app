
import React from 'react';
import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import { Routes, Route, useLocation} from 'react-router-dom';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';


function App () {
const [characters, setCharacters] = useState([]);

    function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
          } else {
              window.alert('invalid input Id');
          }
      });
};
const onClose = (id) =>{
  setCharacters(characters.filter((char) => char.id !== id));
};

const location = useLocation();  //location es un objeto que contiene la locacion y el pathname
//console.log(location);
  return (

    <div className='App' style={{ padding: '25px' }}> 
    {location.pathname !== "/" && <NavBar onSearch ={onSearch}/>}
     
      <NavBar onSearch={onSearch} />
      <Routes >
    <Route path="/" element ={<Form/>}> </Route>
      <Route path='/home' element = {<Cards characters={characters} onClose= {onClose}/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
      
      </div>
  );
}


export default App;
