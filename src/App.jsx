import { useEffect, useState } from 'react'
import './App.css'
import Navabr from './components/Navabr'
import Login from './components/Login'
import { getStore } from './utils'
import { uid } from 'uid'
import Add from './components/Add'
import Products from './components/Products'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/home'
import Hero from './pages/Hero'





function App() {

  const id = uid();


   const [ login, setLogin] = useState(false)
   const [ name, setName] = useState('')
   const [ email,setEmail] = useState('')

   const[pname, setPname] = useState('');
   const [ price, setPrice] = useState ('');

   const[editID,setEditID] = useState(null);
    const[edit, setEdit] = useState(false );


   const [users, setUsers] = useState(getStore('users'));

   const [products, setProducts] = useState(getStore('products'));

    const handleSubmit = () => {

    const newUser = { id:id, uname: name, uemail:email};
    setUsers( newUser);
    }
    const addProduct = () => {
      if(!pname && !price){
        console.log('error');
      } else if (pname && edit){
     setProducts(products.map((item) => {
      if(item.id === editID) {
        return{ ...item, name:pname , price:price}
      }
      return item
     }))
      } else{
         const newProduct = {id:id,  name: pname, price: price }
      setProducts([...products, newProduct])
      }

    }

    const deleteItem = (id) => {
     const newItem = products.filter((item) => item.id !== id)
     setProducts(newItem);
    }

    const ediItem = (id) => {
      const newItem = products.find((item) => item.id === id)
      setEdit(true);
      setEditID(id);
      setPname(newItem.name);
      setPrice(newItem.price)
    }
    useEffect(() => {
      localStorage.setItem('users' , JSON.stringify(users));

      localStorage.setItem('products' , JSON.stringify(products))

    }, [users, products]);

  return (
    <>
    <h2>{users.uname && 'Welcome'} {users.uname}</h2>
<Navabr login={ login} setLogin={setLogin}/>

   <Routes>
    <Route path='login' element= { login && <Login name={name} setName={setName} email={email} setEmail={setEmail}  handleSubmit={handleSubmit}/>}/>

    <Route path='/' element={<Home/>}/>
    <Route path='/hero'  element={<Hero/>}/>
    <Route path='/products' element={<Products ediItem={ediItem} setEdit={setEdit} products={ products} deleteItem={deleteItem}   />}/>
    <Route path='/add' element={<Add  edit={edit} setEdit={setEdit}  pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={ addProduct}/>}/>
    <Route path='/erorr' element={<Error/>}/>
   </Routes>


{/* { login && <Login name={name} setName={setName} email={email} setEmail={setEmail}  handleSubmit={handleSubmit}/>} */}
{/* <Add  edit={edit} setEdit={setEdit}  pname={pname} setPname={setPname} price={price} setPrice={setPrice} addProduct={ addProduct}/> */}
   {/* <Products ediItem={ediItem} setEdit={setEdit} products={ products} deleteItem={deleteItem}   /> */}
    </>
  )
}

export default App
