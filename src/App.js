import React from 'react';
import { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/Nav/NavBar';
import About from './components/About/About'
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';

function App () {
//   const example = {
//     name: 'Morty Smith',
//     species: 'Human', 
//     gender: 'Male',
//     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
//  };
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
  setCharacters(characters.filter((char) => char.id !== id))
}
  return (
    <div className='App' style={{ padding: '25px' }}>
      <NavBar onSearch={onSearch} />
      <Routes>
      <Route path='/' element = {<Cards characters={characters} onClose= {onClose}/>}></Route>
      <Route path='/about' element={<About/>} />
      <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
      
      </div>
  );
}

export default App
