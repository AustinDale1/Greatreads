import React from 'react'
import '../styling/App.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>
                <a href='http://localhost:3000'>Explore</a>
                <a href='http://localhost:3000/Friends'>Friends</a>
                <a href='http://localhost:3000/Profile'>Profile</a>
            </h1>            

        </div>
    )
}

export default Header