import React from 'react'

function Bill({total,itemsList}) {
  return (
    <div>
        <h1>{itemsList.name}</h1>
        <h1>{itemsList.price}</h1>
        <h1>{itemsList.price}</h1>
        <h1>{total}</h1>
    </div>
  )
}

export default Bill