import React, { useState } from 'react'
import { Item } from '../../models/item'

export const ItemPreview: 
React.FC<{
    item:Item, 
    onDeleteItem: (id:string) => void, 
    onAddItemToShoppingList: (id:string, title:string) => void, 
    onUpdateItem: (item:Item) => void}> = props => {
    const [item, setItem] = useState({...props.item})
    const decreaseQuantityHandler = () => {
        if (item.id) {
            if (item.quantity === 0) {
                props.onDeleteItem(item.id)
                return
            }
            if (item.quantity >= 2) {
                props.onAddItemToShoppingList(item.id, item.title)
            }
            setItem((prevItem:Item) => ({...prevItem, quantity: prevItem.quantity-1}))
            props.onUpdateItem(item)
        }
    }
    const increaseQuantityHandler = () => {
        setItem((prevItem:Item) => ({...prevItem, quantity: prevItem.quantity+1}))
        props.onUpdateItem(item)
    }
    const deleteItemHandler = () => {
        if (item.id) {
            props.onDeleteItem(item.id)
        }
    }
    const addItemToShoppingListHandler = () => {
        if (item.id) {
            props.onAddItemToShoppingList(item.id, item.title)
        }
    }
    return (
        <div className="item flex between items-center">
            <p>{item.title}</p>
            <div className="item-actions flex items-center">
                <button onClick={decreaseQuantityHandler} className='decrease-quantity'>↓</button>
                <p>{item.quantity}</p>
                <button onClick={increaseQuantityHandler} className='increase-quantity'>↑</button>
                <p onClick={deleteItemHandler} className='delete-item material-symbols-outlined'>delete</p>
                <p onClick={addItemToShoppingListHandler} className='add-item-to-shopping-list'>+</p>
            </div>
        </div>
    )
}
