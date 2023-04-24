import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../models/item'
import { Place } from '../models/place'
import { Store } from '../models/store'
import { Grocery } from '../models/grocery'

const initialStoreState = {filterBy: {txt: ''}, curStore: null as Store | null, stores: [
    {id: 'l101', title: 'בית', color: '#3caea3', 
    shoppingList: [{id: 'g101', title: 'לחם'}, {id: 'g102', title: 'קפה'}, {id: 'g103', title: 'חלב'},{id: 'g104', title: 'שוקולד'},{id: 'g105', title: 'במבה'}],
    places: [
        {
            id: 'p101',
            title: 'מקרר',
            items: [
              { id: 'i101', title: 'חלב', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'i102', title: 'ביצים', expiry: new Date().toISOString(), quantity: 12 },
              { id: 'i103', title: 'גזר', expiry: new Date().toISOString(), quantity: 4 },
              { id: 'i104', title: 'גבינה צהובה', expiry: new Date().toISOString(), quantity: 1 }
            ]
          },
          {
            id: 'p102',
            title: 'ארון מעל התנור',
            items: [
              { id: 'i105', title: 'פסטה', expiry: new Date().toISOString(), quantity: 5 },
              { id: 'i106', title: 'אורז', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'i107', title: 'קמח', expiry: new Date().toISOString(), quantity: 3 },
              { id: 'i108', title: 'סוכר', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i109', title: 'מלח', expiry: new Date().toISOString(), quantity: 2 }
            ],
          },
          {
            id: 'p103',
            title: 'ארון קפה',
            items: [
              { id: 'i110', title: 'קפה', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i111', title: 'שוקו', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i112', title: 'תה', expiry: new Date().toISOString(), quantity: 2 }
            ]
          },
          {
            id: 'p104345',
            title: 'ארון תבלינים',
            items: [
              { id: 'i1234', title: 'מלח', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i189596', title: 'פלפל', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i1136354555', title: 'פפריקה מתוקה', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'i117772', title: 'פפריקה חריפה', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'i1139898', title: 'צילי', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i656552', title: 'כורכום', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i17676', title: 'קינמון', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i1121212', title: 'קארי', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i1232323', title: 'גינגר', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i1343434', title: 'אורגנו', expiry: new Date().toISOString(), quantity: 2 }
            ]
          }
    ]},
    {id: 'l103', title: 'דירה', color: '#ed553b',             
    shoppingList: [{id: 'g121', title: 'לחם'}, {id: 'g122', title: 'קפה'}, {id: 'g123', title: 'חלב'},{id: 'g124', title: 'שוקולד'},{id: 'g125', title: 'במבה'}],
    places: [
        {
            id: 'p1045',
            title: 'מקרר',
            items: [
              { id: 'a', title: 'חלב', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'b', title: 'ביצים', expiry: new Date().toISOString(), quantity: 12 },
              { id: 'c', title: 'גזר', expiry: new Date().toISOString(), quantity: 4 },
              { id: 'd', title: 'גבינה צהובה', expiry: new Date().toISOString(), quantity: 1 }
            ]
          },
          {
            id: 'p134',
            title: 'ארון מעל התנור',
            items: [
              { id: 'e', title: 'פסטה', expiry: new Date().toISOString(), quantity: 5 },
              { id: 'f', title: 'אורז', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'g', title: 'קמח', expiry: new Date().toISOString(), quantity: 3 },
              { id: 'h', title: 'סוכר', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'i', title: 'מלח', expiry: new Date().toISOString(), quantity: 2 }
            ]
          },
          {
            id: 'p167',
            title: 'ארון קפה',
            items: [
              { id: 'j', title: 'קפה', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'k', title: 'שוקו', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'l', title: 'תה', expiry: new Date().toISOString(), quantity: 2 }
            ]
          }
    ]},
    {id: 'l103434', title: 'מטבח', color: '#f6d55c', 
    shoppingList: [{id: 'g1331', title: 'לחם'}, {id: 'g132', title: 'קפה'}, {id: 'g133', title: 'חלב'},{id: 'g134', title: 'שוקולד'},{id: 'g135', title: 'במבה'}],
    places: [
        {
            id: 'p145',
            title: 'מקרר',
            items: [
              { id: 'm', title: 'חלב', expiry: new Date().toISOString(), quantity: 2 },
              { id: 'n', title: 'ביצים', expiry: new Date().toISOString(), quantity: 12 },
              { id: 'o', title: 'גזר', expiry: new Date().toISOString(), quantity: 4 },
              { id: 'p', title: 'גבינה צהובה', expiry: new Date().toISOString(), quantity: 1 }
            ]
          },
          {
            id: 'p10266',
            title: 'ארון שמאלי',
            items: [
              { id: 'q', title: 'פסטה', expiry: new Date().toISOString(), quantity: 5 },
              { id: 'r', title: 'אורז', expiry: new Date().toISOString(), quantity: 2 },
              { id: 's', title: 'קמח', expiry: new Date().toISOString(), quantity: 3 },
              { id: 't', title: 'סוכר', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'u', title: 'מלח', expiry: new Date().toISOString(), quantity: 2 }
            ]
          },
          {
            id: 'p10345',
            title: 'ארון קפה',
            items: [
              { id: 'v', title: 'קפה', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'w', title: 'שוקו', expiry: new Date().toISOString(), quantity: 1 },
              { id: 'x', title: 'תה', expiry: new Date().toISOString(), quantity: 2 }
            ]
          }
    ]}
]}

const storeSlice = createSlice({
    name: 'store',
    initialState: initialStoreState,
    reducers: {
        setCurStore:  (state, action: PayloadAction<string>) => {
            const store = state.stores.find((z:Store) => z.id === action.payload)
            if (store) {
                state.curStore = store
                return
            }
            state.curStore = null
        },
        addPlace: (state, action: PayloadAction<string>) => {
          const newPlace = {id: makeId(), title: action.payload, items: [] as Item[]}
          state.curStore?.places.unshift(newPlace)
        },
        addItem: (state, action: PayloadAction<{itemToAdd:Item, placeId:string}>) => {
          const {title, quantity, expiry} = action.payload.itemToAdd
          const newItem = {id: makeId(), title, expiry, quantity}
          const place = state.curStore?.places.find((p:Place) => p.id === action.payload.placeId)
          if (!place) return state
          place?.items.push(newItem)
        },
        deleteItem: (state, action: PayloadAction<{itemId:string, placeId:string}>) => {
          const place = state.curStore?.places.find((p:Place) => p.id === action.payload.placeId)
          const itemToDeleteIdx = place?.items.findIndex((item:Item) => item.id === action.payload.itemId) || 0
          if (itemToDeleteIdx < 0) {
            return state
          }
          place?.items.splice(itemToDeleteIdx, 1)
        },
        updateItem: (state, action: PayloadAction<{itemToUpdate: Item, placeId:string}>) => {
          
          const place = state.curStore?.places.find((p:Place) => p.id === action.payload.placeId)
          const itemToUpdpateIdx = place?.items.findIndex((item:Item) => item.id === action.payload.itemToUpdate.id) || 0
          if (itemToUpdpateIdx < 0) {
            return state
          }
          place?.items.splice(itemToUpdpateIdx, 1, action.payload.itemToUpdate)
          const items = place?.items
          console.log({...items});
        },
        addGroceryToShoopingList: (state, action: PayloadAction<string>) => {
          state.curStore?.shoppingList.push({id: makeId(), title: action.payload})
        },
        deleteGroceryFromShoppingList: (state, action: PayloadAction<string>) => {
          const groceryIdx = state.curStore?.shoppingList.findIndex((g:Grocery) => g.id === action.payload) || -1
          state.curStore?.shoppingList.splice(groceryIdx, 1)
        },
        addItemToShoppingList: (state, action: PayloadAction<{id:string, title:string}>) => {
          const groceryIdx = state.curStore?.shoppingList.findIndex((g:Grocery) => g.id === action.payload.id) || -1
          if (groceryIdx > -1) return state
          state.curStore?.shoppingList.push(action.payload)
        },
        setFilterBy: (state, action: PayloadAction<string>) => {
          state.filterBy.txt = action.payload
        }
    }
})

export const storeActions = storeSlice.actions

export default storeSlice.reducer

function makeId(length = 6) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return txt
}