import React, { FormEvent, useState } from 'react'
import { ItemList } from './ItemList'
import { Item } from '../../models/item'
import { ProductList } from './ProductList'

export const PlacesList = (props: any) => {
    const [itemToAdd, setItemToAdd] = useState({ title: '', quantity: 1, expiry: '', imgUrl: '', barcode: '' })
    const setItemTitleHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        props.onSearch(ev.target.value)
        setItemToAdd({ ...itemToAdd, title: ev.target.value })
    }
    const setItemQuantityHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setItemToAdd({ ...itemToAdd, quantity: +ev.target.value })
    }
    const setItemExpiryHandler = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setItemToAdd({ ...itemToAdd, expiry: ev.target.value })
    }
    const addItemHandler = (ev: FormEvent) => {
        ev.preventDefault()
        if (!itemToAdd.title || !itemToAdd.barcode) return
        console.log(itemToAdd)
        // props.onAddItem(itemToAdd, props.id)
        setItemToAdd({ title: '', quantity: 1, expiry: '', imgUrl: '', barcode: '' })
    }
    // const addItemHandler = (itemToAdd: Item) => {
    //     props.onAddItem(itemToAdd, props.id)
    // }
    const deleteItemHandler = (itemId: string) => {
        props.onDeleteItem(itemId, props.id)
    }
    const updateItemHandler = (itemToUpdate: Item) => {
        props.onUpdateItem(itemToUpdate, props.id)
    }
    const addItemToShoppingListHandler = (id:string, title:string) => {
        props.onAddItemToShoppingList(id, title)
    }
    const chooseProductHandler = (title: string, imgUrl: string, barcode: string) => {
        setItemToAdd({ ...itemToAdd, title, imgUrl, barcode})
      }
    return (
        <div className='place flex column'>
            <div className='place-details flex between'>
                <h5>{props.title}</h5>
            </div>
            <div className="item-list">
                <ItemList  onAddItemToShoppingList={addItemToShoppingListHandler} onUpdateItem={updateItemHandler} onDeleteItem={deleteItemHandler} onAddItem={addItemHandler} items={props.items} />
            </div>
            <div className='add-item flex between column'>
                <form onSubmit={addItemHandler} className="add-item-form flex items-center">
                    <div className='inputs flex column'>
                        <div className="title-quantity flex">
                            <input
                                onChange={setItemExpiryHandler}
                                value={itemToAdd.expiry}
                                className='new-item-date'
                                type="date"
                                placeholder='Expiration'
                            />

                            <input
                                onChange={setItemQuantityHandler}
                                value={itemToAdd.quantity}
                                className='new-item-quantity'
                                type="number"
                                placeholder='Quantity'
                            />
                        </div>
                        <input
                            onChange={setItemTitleHandler}
                            value={itemToAdd.title} className='new-item-title'
                            type="text" placeholder='הוסף מוצר'
                        />
                    </div>
                    <button type='submit'>+</button>
                </form>
                <div className="product-list-modal">
                    <ProductList onChooseProduct={chooseProductHandler} products={props.products}/>
                </div>
            </div>
        </div>
    )
}
