import { Place } from "./place"

export interface Zone {
    id: string
    title:string
    color:string
    places: Place[]
}