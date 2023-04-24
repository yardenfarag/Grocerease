import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StorePreview } from '../components/StorePreview'
import { storeActions } from '../store/store';

export const StoresPage = () => {
  const dispatch = useDispatch()
  const stores = useSelector((state:any) => state.store.stores)
  const setCurStoreHandler = (id:string) => {
    dispatch(storeActions.setCurStore(id))
  }
  return (
    <div className='store-page'>
        {stores.map((store:any) => {
            return <StorePreview setCurStore={setCurStoreHandler} key={store.id} id={store.id} color={store.color} title={store.title}/>
        })}
    </div>
  )
}
