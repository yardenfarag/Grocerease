import React from 'react'
import {Link} from 'react-router-dom'

export const AppHeader = () => {
    return (
        <header className='app-header'>
            <div className='flex flex-column between items-center'>
                <div className="logo">
                    <img className='logo-img' src="https://res.cloudinary.com/dfz8mxb4f/image/upload/v1680119258/Group_1_nhbrcc.svg" alt="logo" />
                </div>
            <nav>
                <ul className='clean-list flex'>
                    <li><Link to="/stock">Stock</Link></li>
                    <li><Link to="/">Shopping List</Link></li>
                    <li><Link to="/">Settings</Link></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
