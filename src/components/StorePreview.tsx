import React from 'react'
import {Link} from 'react-router-dom'

export const StorePreview = (props:any) => {
  const setCurStoreHandler = () => {
    props.setCurStore(props.id)
  }
  return (
    <Link onClick={setCurStoreHandler} to={props.id} style={{backgroundColor: props.color}} className="store-preview">
        <h3>{props.title}</h3>
    </Link>
  )
}
