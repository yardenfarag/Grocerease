import React, { FormEventHandler, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StorePreview } from '../components/StorePreview'
import { storeActions } from '../store/store';
import { Icon } from '../models/icon';
import { storeService } from '../services/store.service';

export const StoresPage = () => {
  const dispatch = useDispatch()
  const stores = useSelector((state: any) => state.store.stores)
  const colors = ['#a2d2ff','#9ae3b7','#e6cda3','#f2eac4','#f0a8a8','#eab0e3','#95dbda','#9baadd']
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [newStoreTitle, setNewStoreTitle] = useState('')
  const setSelectedColorHandler = (color:string) => {
    setSelectedColor(color)  
  }
  const setCurStoreHandler = (id: string) => {
    dispatch(storeActions.setCurStore(id))
  }
  const setNewStoreTitleHandler = (ev:React.ChangeEvent<HTMLInputElement>) => {
    setNewStoreTitle(ev.target.value)
  }
  const addStoreHandler = () => {
    if (!newStoreTitle) {
      return
    }
    dispatch(storeActions.addStore({newStoreTitle, selectedColor}))
    setNewStoreTitle('')
  }
  return (
    <div className='store-page'>
      <h1>בחר מיקום</h1>
      <div className="stores flex">
        {stores.map((store: any) => {
          return <StorePreview setCurStore={setCurStoreHandler} key={store._id} id={store._id} color={store.color} title={store.title} />
        })}
      </div>
      <div className='add-store'>
        <input onChange={setNewStoreTitleHandler} type="text" value={newStoreTitle} placeholder='הוסף מקום' />
        <div className='colors flex'>
        {colors.map((c:string, index) => {
        return <div
        onClick={() => setSelectedColorHandler(c)} 
        className={selectedColor === c? 'selected' : ''}
        style={{backgroundColor: c, width: '35px', height: '20px'}}
        key={c}>
        </div>
        })}
        </div>
        <button onClick={addStoreHandler}>+</button>
      </div>
    </div>
  )
}
