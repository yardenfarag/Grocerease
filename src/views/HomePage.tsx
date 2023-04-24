import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className='home-page'>
            <div className="banner flex">
                <h1>Welcome!</h1>
                <Link to='/store' className='call-to-action'>Start Here</Link>
            </div>
        </div>
    )
}
