import React from 'react'

export const ItemPreview = (props:any) => {
    return (
        <div className="item flex between">
            <p>{props.title}</p>
            <div className="quantity flex">
                <span>-</span><p>{props.quantity}</p><span>+</span>
            </div>
        </div>
    )
}
