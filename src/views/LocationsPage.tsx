import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LocationPreview } from '../components/LocationPreview'
import { locationActions } from '../store/location';

export const LocationsPage = () => {
  const dispatch = useDispatch()
  const locations = useSelector((state:any) => state.location.locations)
  const setCurLocationHandler = (id:string) => {
    dispatch(locationActions.setCurLocation(id))
  }
  return (
    <div className='location-page'>
        {locations.map((location:any) => {
            return <LocationPreview setCurLocation={setCurLocationHandler} key={location.id} id={location.id} color={location.color} title={location.title}/>
        })}
    </div>
  )
}
