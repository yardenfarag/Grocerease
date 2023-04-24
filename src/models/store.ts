import { Place } from "./place"
import { Grocery } from "./grocery"

export interface Store {
    id: string
    title:string
    color:string
    places: Place[]
    shoppingList: Grocery[]
}