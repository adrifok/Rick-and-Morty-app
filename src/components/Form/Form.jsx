import React from 'react';
//import { Route, Link } from 'react-router-dom';
import styles from './Form.module.css';


export default function Form (){
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const handleChange =(e)=>{
        setUserData({
        ...userData,
      [e.target.name]: e.target.value
        })
    }

    return (
        <div  className={styles.container} >
            <form> 
                <div >
                    
                

                <label>Username:</label>
                <input
                name='username' 
                type='text'
                input placeholder='Escribe tu usuario'
                onChange={handleChange} />
                
               
                </div>
                <div>
                <label>Password:</label>
                <input
                name='password' 
                type='password'
                input placeholder='Escribe tu contraseña' 
                onChange={handleChange} />
 
               
                </div>
                <button type='submit' >Login</button>   //concatenar?
                
            </form>
        </div>
    )
    }
