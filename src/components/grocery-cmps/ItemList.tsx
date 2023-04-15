import React from 'react'
import { ItemPreview } from './ItemPreview'

export const ItemList = (props:any) => {
    return (
        <div className="items flex column">
            {props.items.map((item: any) => {
                return (
                    <ItemPreview key={item.id} title={item.title} quantity={item.quantity}/>
                )
            })}
            <div className='add-item flex between'>
                <form className="add-item-form flex column">
                    <input className='new-item-title' type="text" placeholder='New item...' />
                    <input className='new-item-quantity' type="number" placeholder='Quantity' />
                    <input className='new-item-date' type="date" placeholder='Expiration' />
                </form>
                <button>+</button>
            </div>
        </div>
    )
}
