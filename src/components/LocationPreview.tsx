import React from 'react'
import {Link} from 'react-router-dom'

export const LocationPreview = (props:any) => {
  const setCurLocationHandler = () => {
    props.setCurLocation(props.id)
  }
  return (
    <Link onClick={setCurLocationHandler} to={props.id} style={{backgroundColor: props.color}} className="location-preview">
        <h3>{props.title}</h3>
    </Link>
  )
}
