import React from 'react';
//import { Route, Link } from 'react-router-dom';
import { useState } from 'react';
import styles from './Form.module.css';
import validate from './validate';


export default function Form (props){
    const [userData, setUserData] = useState({ username: "", password: ""});

    const [errors, setErrors] = useState ({
        username :"",
        password: "",
})

    const handleInputChange =(e)=>{
        const {name, value} = e.target;
        setUserData({
        ...userData,
      [name]: value
        })

        //console.log(inputs.userData)
        setErrors(
            validate(({
                ...userData,
                [name] : value
            }))
         )
         //console.log(errors);
    }

        const handleSubmit = () =>{
            props.login(userData);
        }

    return (
        <div  className={styles.container} >
            <form onSubmit= {handleSubmit} > 
                <div >
                    <label>Username:</label>
                    <input
                    name='username' 
                    type='text'
                    value = {userData.username}
                    input placeholder='input you user'
                    onChange={handleInputChange} />
                
                <p className= {styles.errors} >
                    {errors.username ? errors.username : null}
                </p>
                </div>
                <div>
                <label>Password:</label>
                <input
                name='password' 
                type='password'
                input placeholder='input your password' 
                value = {userData.password}
                onChange={handleInputChange} />
 
                <p className= {styles.errors} >
                    {errors.password ? errors.password : null}
                </p>
                </div>
                <button type='submit'>Login</button>  
                
            </form>
        </div>
    )
    }
