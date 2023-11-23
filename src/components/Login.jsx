import React from 'react'

export default function Login({name, setName, email, setEmail, handleSubmit}) {
  return (
    <div>

        <form className='login'>
            <input style={{width:"150px", margin:"auto", display:'block', marginTop:"50px"}} placeholder='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input style={{width:"150px", margin:"auto", display:'block'}} placeholder='email.com' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <button className='login_btn'   onClick={() => handleSubmit()}>login</button>
        </form>
    </div>
  )
}
