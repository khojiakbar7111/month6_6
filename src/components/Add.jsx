import React from 'react'

export default function Add({pname, setPname, price, setPrice, addProduct, edit, }) {
  return (
    <div>
        <form className='add'>
            <input type="text"  name="" id=''placeholder='mahsulot nomi'  value={pname} onChange={(e) => setPname(e.target.value) } />
            <input type="text" name='' id=''   value={price} placeholder='mahsulot narxi'  onChange={(e) => setPrice(e.target.value)} />
            <button className='add_btn' onClick={() => addProduct()}>
              {edit ? 'edit' : 'add'}
            </button>
        </form>
    </div>
  )
}
