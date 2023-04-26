import { Icon } from '../models/icon'
import { Store } from '../models/store'
import { storageService } from './storage.service'

export const storeService = {
    getStores,
    getStoreById,
    deleteStore,
    saveStore,
    getEmptyStore,
    getIcons
}

const STORE_KEY = 'store_db'

const gStores:Store[] = [
    {_id: 'l101', 
    title: 'בית', 
    color: '#fbf', 
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
    {_id: 'l103', 
    title: 'דירה', 
    color: '#bce',             
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
    {_id: 'l103434', 
    title: 'מטבח', 
    color: '#0dc', 
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
]

const icons:Icon[] = [
  {
    _id: 'i1', 
    title: 'banana', 
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428865/2698836_yellow_glsses_fruit_mustache_banana_bdlljy.png'
  },
  {
    _id: 'i2',
    title: 'pineapple',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428865/2698837_pineapple_cartoon_mustache_style_sunglasses_miami_fruit_x1lxon.png',
  },
  {
    _id: 'i3',
    title: 'apple',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428867/2698832_fruit_sunglasses_apple_red_leaf_cartoon_mustache_zew60t.png'
  },
  {
    _id: 'i4',
    title: 'taco',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428867/2698840_mustache_mexican_taco_green_vegetables_sunglasses_tomato_c6gucw.png'
  },
  {
    _id: 'i5',
    title: 'ice cream',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428869/2698844_lips_sunglasses_waffle_cone_icecream_cream_lzt0ax.png'
  },
  {
    _id: 'i6',
    title: 'lemon',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428870/2698815_lips_yellow_vegetables_sunglasses_lemon_limon_fruit_hkehiq.png'
  },
  {
    _id: 'i7',
    title: 'eggplant',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428871/2698820_purple_eggplant_vegetables_sunglasses_lips_kwzrgw.png'
  },
  {
    _id: 'i8',
    title: 'hotdog',
    imgUrl: 'https://res.cloudinary.com/dfz8mxb4f/image/upload/v1682428869/2698839_sausage_hotdog_mustache_cartoon_food_sunglasses_yl0n1q.png'
  }

]

function getStores() {
    try {
      return _loadStores()
    } catch (error) {
      console.log('Cannot get stores ', error)
    }
}

function getIcons() {
  try {
    return icons
  } catch (error) {
    console.log('Cannot get icons ', error)
  }
}

function getStoreById(id:string) {
  try {
    const stores = _loadStores()
    const store = stores.find((store:Store) => store._id === id)
    return store
  } catch (error) {
    console.log('Cannot get store ', error)
  }
}

function deleteStore(id:string) {
  try {
    const stores = _loadStores()
    const storeIdx = stores.findIndex((store:Store) => store._id === id)
    if (storeIdx !== -1) {
      stores.splice(storeIdx, 1)
    }
    storageService.store(STORE_KEY, stores)
    return stores
  } catch (error) {
    console.log('Cannot delete store ', error)
  }
}

function _updateStore(store:Store) {
  try {
    const stores = _loadStores()
    const storeIdx = stores.findIndex((s:Store) => s._id === store._id)
    if (storeIdx !== -1) {
      stores[storeIdx] = store
    }
    storageService.store(STORE_KEY, stores)
  } catch (error) {
    console.log('Cannot update store ', error)
  }
}

function _addStore(store:Store) {
  try {
    const stores = _loadStores()
    store._id = _makeId()
    stores.push(store)
    storageService.store(STORE_KEY, stores)
    return stores
  } catch (error) {
    console.log('Cannot add store ', error)
  }
}

function saveStore(store:Store) {
    return store._id ? _updateStore(store) : _addStore(store)
}

function getEmptyStore() {
    return {
      title: '',
      color: '',
      places: [],
      shoppingList: []
    }
}

function _loadStores() {
    let stores = storageService.load(STORE_KEY)
    if (!stores || !stores.length) stores = gStores
    storageService.store(STORE_KEY, stores)
    return stores
}



function _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
}