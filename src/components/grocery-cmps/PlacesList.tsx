import React from 'react'
import { ItemList } from './ItemList'

export const PlacesList = (props: any) => {
    return (
        <div className='place'>
            <div className='place-details flex between'>
                <h5>{props.title}</h5>
            </div>
            <ItemList items={props.items}/>
        </div>
    )
}
