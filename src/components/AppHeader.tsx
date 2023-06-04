import React from 'react'
import { Link } from 'react-router-dom'
import { ItemFilter } from './ItemFilter'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { User } from '../models/user'

export const AppHeader = (props: any) => {
    const user = useSelector<RootState, User | null>(state => state.user.loggedInUser)
    const changeLngHandler = (ev: any) => {
        props.onChangeLng(ev.target.value)
    }
    return (
        <header className='app-header'>
            <div className='flex flex-column between items-center'>
                <div className="logo">
                    <img className='logo-img' src="https://res.cloudinary.com/dfz8mxb4f/image/upload/v1680119258/Group_1_nhbrcc.svg" alt="logo" />
                </div>
                <ItemFilter />
                <nav>
                    <ul className='clean-list flex'>
                        {/* <select onChange={changeLngHandler}>
                            <option value="he">Hebrew</option>
                            <option value="en">English</option>
                        </select> */}
                        <li>⚙️</li>
                        {/* <li><Link to="/stock">Stock</Link></li>
                    <li><Link to="/">Shopping List</Link></li>
                    <li><Link to="/">Settings</Link></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
