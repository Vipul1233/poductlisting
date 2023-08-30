import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Addproduct() {
  const [name, setName]=useState('');
  const [category, setCategory]=useState('');
  const [description, setDescription]=useState('');
  const [price, setPrice]=useState('');
  const [error,setError] = useState(false);
  const navigate=useNavigate()
  const Addproduct=async()=>{
    if(!name || !price  || !category)
        {
            setError(true);
            return false
        }
    // console.log(name,category,description,price);
    let result=await fetch("http://localhost:5000/add-product",{
      method:"post",
      body:JSON.stringify({name,category,description,price}),
      headers:{
        "Content-type":"application/json"
      }
    })
    result=await result.json();
    console.log(result)
    if(result){
      navigate('/');
    }
    // setName("")
    // setCategory("")
    // setDescription("")
    // setPrice("")
  }

  // const Addproduct=()=>{
  //   console.log(name,category,description,price);
  // }
  
  return (
    <div className='listproduct'>
      <h1>Register Product</h1>
      {/* <form action=""> */}

      <div className='productitem'>
        <label htmlFor="">Enter the product name </label><br />
        <input type="text"   value={name} id="" onChange={(e)=>{setName(e.target.value)}} />
        {error && !name && <span className='invalid-input'>Enter valid name</span>}
      </div>
      <div className='productitem'>
        <label htmlFor="">Enter the category name </label><br />
        <input type="text"  id=""  value={category}  onChange={(e)=>{setCategory(e.target.value)}} />
        {error && !category && <span className='invalid-input'>Enter valid category</span>} 

      </div>
      {/* <div className='productitem'>
        <label htmlFor="">Enter the  description</label><br />
        <textarea type="text"  id="" value={description}  onChange={(e)=>{setDescription(e.target.value)}} />
      </div> */}
      <div className='productitem'>
        <label htmlFor="">Enter the price of the product</label><br />
        <input type="number"  id="" value={price}  onChange={(e)=>{setPrice(e.target.value)}}  />
        {error && !price && <span className='invalid-input'>Enter valid price</span>}
      </div>
      <button onClick={Addproduct}>Add Product</button>

      {/* </form> */}
    </div>
  )
}

export default Addproduct
