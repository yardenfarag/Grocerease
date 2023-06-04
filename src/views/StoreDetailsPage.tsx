import React, { FormEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlacesList } from '../components/grocery-cmps/PlacesList'
import { storeActions } from '../store/store'
import { useParams } from 'react-router-dom'
import { Store } from '../models/store'
import { Item } from '../models/item'
import { Grocery } from '../models/grocery'
import { ShoppingList } from '../components/ShoppingList'
import { ItemFilter } from '../components/ItemFilter'
import { AppHeader } from '../components/AppHeader'
import { RootState } from '../store'
import { ProductList } from '../components/grocery-cmps/ProductList'
import { Product } from '../models/product'

export const StoreDetailsPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const products: Product[] | null = useSelector((state:RootState) => state.store.products)

  useEffect(() => {
    if (!id) return
    dispatch(storeActions.setCurStore(id))
  }, [id])
  let store: Store = useSelector((state: any) => state.store.curStore)

  const addPlaceHandler = (ev: any) => {
    ev.preventDefault()
    if (!ev.target[0].value) return
    console.log(ev.target[0].value)
    dispatch(storeActions.addPlace(ev.target[0].value))
    ev.target[0].value = ''

  }

  const addGroceryToShoppingListHandler = (groceryTitle: string) => {
    dispatch(storeActions.addGroceryToShoopingList(groceryTitle))
  }

  const addItemHandler = (itemToAdd: Item, placeId: string) => {
    dispatch(storeActions.addItem({ itemToAdd, placeId }))
  }

  const deleteItemHandler = (itemId: string, placeId: string) => {
    dispatch(storeActions.deleteItem({ itemId, placeId }))
  }
  const updateItemHandler = (itemToUpdate: Item, placeId: string) => {
    dispatch(storeActions.updateItem({ itemToUpdate, placeId }))
  }
  const deleteGroceryHandler = (groceryId: string) => {
    dispatch(storeActions.deleteGroceryFromShoppingList(groceryId))
  }
  const addItemToShoppingListHandler = (id: string, title: string) => {
    dispatch(storeActions.addItemToShoppingList({ id, title }))
  }
  const searchHandler = (searchTerm:string) => {
    dispatch(storeActions.getProductsByTxt(searchTerm))
  }
  // const chooseProductHandler = (title: string, imgUrl: string, barcode: string) => {
    
  // }
  return (
    <div style={{background: `linear-gradient(to bottom right, #fff, ${store?.color})`}}>
      <AppHeader />
      <main>
        <div className='places-container'>
          <form onSubmit={addPlaceHandler} className="add-place">
            <input type="text" placeholder='הוסף מיקום' />
            <button type='submit'>+</button>
          </form>
          {store && store.places.map((place: any) => {
            return (
              <PlacesList products={products} onSearch={searchHandler} onAddItemToShoppingList={addItemToShoppingListHandler} onUpdateItem={updateItemHandler} onDeleteItem={deleteItemHandler} onAddItem={addItemHandler} key={place.id} id={place.id} title={place.title} items={place.items}/>
            )
          })}
        </div>
        {/* <ProductList onChooseProduct={chooseProductHandler} products={products}/> */}
        {/* <ShoppingList onDeleteGrocery={deleteGroceryHandler} onAddGroceryToShoppingList={addGroceryToShoppingListHandler} shoppingList={store?.shoppingList} color={store.color}/> */}
      </main>
    </div>
  )
}
