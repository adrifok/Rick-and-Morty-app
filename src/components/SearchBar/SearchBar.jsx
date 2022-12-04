import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [character, setCharacter] =useState('');
   
   const handleChange = (e) =>{
     const {value} = e.target;
     setCharacter(value)
   }
   
   const clean=(character) => {
      setCharacter(character= '')
   }

   const concatenar =() =>{
      props.onSearch(character);
      clean();
   }

   return (

<div className={styles.container} >
         <input type='search' name='search' id='' onChange={handleChange} />
      <button onClick={() =>props.onSearch(character)}>Add...</button>
      </div>
   );
}
