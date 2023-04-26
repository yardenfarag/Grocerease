import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <div className='home-page'>
            <div className="banner flex">
                <Link to='/store' className='call-to-action'>Start Here</Link>
            </div>
        </div>
    )
}
