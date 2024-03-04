import React, {useState, useEffect} from 'react'
import '../styling/App.css'


const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('submitted');
    }
    return (
    <div className='loginBox'>
        <form onSubmit={handleSubmit} className='loginForm'>
            <label>Enter your username:
                <input 
                    type="text" 
                    name="username" 
                />
            </label>
            <label>Enter your password:
                <input 
                    type="text" 
                    name="password" 
                />
                </label>
                <input type="submit" />
        </form>
    </div>
    )
}

export default Login