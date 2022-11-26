import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [id, setId] =useState('');
   const handleChange = (evento) =>{
     const {value} = evento.target;
     setId(value)
   }
   return (

<div className={styles.container} >
         <input type='search' name='search' id='' onChange={handleChange} />
      <button 
      onClick={() =>props.onSearch(id)}>Add...</button>
      </div>
   );
}
