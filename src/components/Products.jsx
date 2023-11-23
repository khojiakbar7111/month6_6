import React from 'react'


export default function Products({products, deleteItem,   ediItem}) {
  return (
    <div >
      {products.map((item) => {
        return(
          <div className='cay' key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <button className='product_btn' onClick={() => deleteItem(item.id)}>delete</button>
            <button className='product_btn' onClick={() => ediItem(item.id) } >edit</button>
          </div>
        )
      })}
    </div>
  )
}
