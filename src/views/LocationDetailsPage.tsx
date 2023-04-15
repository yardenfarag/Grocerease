import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PlacesList } from '../components/grocery-cmps/PlacesList'
import { locationActions } from '../store/location'
import {useParams} from 'react-router-dom'
import { Zone } from '../models/zone'

export const LocationDetailsPage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  useEffect(() => {
    if (!id) return
    dispatch(locationActions.setCurLocation(id))
  }, [id])
  const zone:Zone = useSelector((state:any) => state.location.curLocation)
  
  const addPlaceHandler = (ev:any) => {
    ev.preventDefault()
    if (!ev.target[0].value) return 
    console.log(ev.target[0].value)
    dispatch(locationActions.addPlace(ev.target[0].value))
    ev.target[0].value = ''
    
  }
  return (
    <main>
      <form onSubmit={addPlaceHandler} className="add-place">
        <input type="text" placeholder='Add a place' />
        <button type='submit'>+</button>
      </form>
      {zone && zone.places.map((place: any) => {
        return (
          <PlacesList key={place.id} title={place.title} items={place.items} />
        )
      })}
    </main>
  )
}
