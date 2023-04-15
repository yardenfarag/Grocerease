import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../models/item'
import { Place } from '../models/place'
import { Zone } from '../models/zone'

const initialLocationState = {curLocation: null as Zone | null, locations: [
    {id: 'l101', title: 'Home Kitchen', color: '#3caea3', places: [
        {
            id: 'p101',
            title: 'Fridge',
            items: [
              { id: 'i101', title: 'Milk', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'i102', title: 'Eggs', expiry: new Date().toISOString(), quantity: 12 },
              { id: 'i103', title: 'Carrots', expiry: new Date().toISOString(), quantity: 4 },
              { id: 'i104', title: 'Cheese', expiry: new Date().toISOString(), quantity: 1 }
            ]
          },
          {
            id: 'p102',
            title: 'Top cabinet',
            items: [
              { id: 'i105', title: 'Pasta', expiry: new Date().toISOString(), quantity: 5 },
              { id: 'i106', title: 'Rice', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'i107', title: 'Flour', expiry: new Date().toISOString(), quantity: 3 },
              { id: 'i108', title: 'Sugar', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i109', title: 'Salt', expiry: new Date().toISOString(), quantity: 2 }
            ]
          },
          {
            id: 'p103',
            title: 'Cabinet next to the fridge',
            items: [
              { id: 'i110', title: 'Coffee', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i111', title: 'Coco powder', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i112', title: 'Tea', expiry: new Date().toISOString(), quantity: 2 }
            ]
          }
    ]},
    {id: 'l103', title: 'Random', color: '#ed553b', places: [
        {
            id: 'p1045',
            title: 'Fridge',
            items: [
              { id: 'a', title: 'Milk', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'b', title: 'Eggs', expiry: new Date().toISOString(), quantity: 12 },
              { id: 'c', title: 'Carrots', expiry: new Date().toISOString(), quantity: 4 },
              { id: 'd', title: 'Cheese', expiry: new Date().toISOString(), quantity: 1 }
            ]
          },
          {
            id: 'p134',
            title: 'Top cabinet',
            items: [
              { id: 'e', title: 'Pasta', expiry: new Date().toISOString(), quantity: 5 },
              { id: 'f', title: 'Rice', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'g', title: 'Flour', expiry: new Date().toISOString(), quantity: 3 },
              { id: 'h', title: 'Sugar', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i', title: 'Salt', expiry: new Date().toISOString(), quantity: 2 }
            ]
          },
          {
            id: 'p167',
            title: 'Cabinet next to the fridge',
            items: [
              { id: 'j', title: 'Coffee', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'k', title: 'Coco powder', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'l', title: 'Tea', expiry: new Date().toISOString(), quantity: 2 }
            ]
          }
    ]},
    {id: 'l103434', title: 'At Moms', color: '#f6d55c', places: [
        {
            id: 'p145',
            title: 'Fridge',
            items: [
              { id: 'm', title: 'Milk', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'n', title: 'Eggs', expiry: new Date().toISOString(), quantity: 12 },
              { id: 'o', title: 'Carrots', expiry: new Date().toISOString(), quantity: 4 },
              { id: 'p', title: 'Cheese', expiry: new Date().toISOString(), quantity: 1 }
            ]
          },
          {
            id: 'p10266',
            title: 'Top cabinet',
            items: [
              { id: 'q', title: 'Pasta', expiry: new Date().toISOString(), quantity: 5 },
              { id: 'r', title: 'Rice', expiry: new Date().toISOString(), quantity: 2 },
              { id: 's', title: 'Flour', expiry: new Date().toISOString(), quantity: 3 },
              { id: 't', title: 'Sugar', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'u', title: 'Salt', expiry: new Date().toISOString(), quantity: 2 }
            ]
          },
          {
            id: 'p10345',
            title: 'Cabinet next to the fridge',
            items: [
              { id: 'v', title: 'Coffee', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'w', title: 'Coco powder', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'x', title: 'Tea', expiry: new Date().toISOString(), quantity: 2 }
            ]
          }
    ]}
]}

const locationSlice = createSlice({
    name: 'location',
    initialState: initialLocationState,
    reducers: {
        setCurLocation(state, action: PayloadAction<string>) {
            const location = state.locations.find((z:Zone) => z.id === action.payload)
            if (location) {
                state.curLocation = location
                return
            }
            state.curLocation = null
        },
        addPlace(state, action: PayloadAction<string>) {
          const newPlace = {id: makeId(), title: action.payload, items: [] as Item[]}
          state.curLocation?.places.unshift(newPlace)
        },
        addItem(state, action: PayloadAction<{placeId: string, title:string, expiry: string, quantity:number}>) {
          const newItem = {id: makeId(), title: action.payload.title, expiry: action.payload.expiry, quantity: action.payload.quantity}
          const place = state.curLocation?.places.find((p:Place) => p.id === action.payload.placeId)
          if (!place) return state
          place?.items.push(newItem)
        }
    }
})

export const locationActions = locationSlice.actions

export default locationSlice.reducer

function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}