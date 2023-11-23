import React from 'react'

export default function Edit() {
  return (
    <div>
        <form className='add'>
            <input type="text" placeholder='mahsulotni ozgartirish' />
        <input type="text" placeholder='narxini ozgartirish' />
        <button className='add_btn'>edit</button>
        </form>
    </div>
  )
}
