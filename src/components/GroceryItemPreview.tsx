import React from 'react'

export const GroceryItemPreview = (props: any) => {
    const { id, title } = props.item
    const deleteGroceryHandler = () => {
        props.onDeleteGrocery(id)
    }
    return (
        <li className='flex between' key={id}>
            <p>{title}</p>
            <p onClick={deleteGroceryHandler}>x</p>
        </li>
    )
}
