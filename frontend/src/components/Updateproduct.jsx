import React, { useEffect, useState } from 'react'
// import  {useParams}  from 'react-router-dom'
import { useParams,useNavigate } from "react-router-dom";
function Updateproduct() {
  let { id } = useParams();
  const navigate=useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  // console.log(params)
  useEffect(() => {
    getproductdetail();
  }, [])
  const getproductdetail = async () => {

    let result = await fetch(`http://localhost:5000/products/${id}`);
    result = await result.json();
    setName(result.name);
    setCategory(result.category);
    setDescription(result.description);
    setPrice(result.price)
  }
  const updateDetails=async()=>{
    let result = await fetch(`http://localhost:5000/products/${id}`,{
        method:"put",
        body:JSON.stringify({name,category,description,price}),
        headers: {
          'Content-Type': 'Application/json'
      }
    });
      result=await result.json();
      if(result){
        navigate('/')
      }

  }
  return (
    <div className='listproduct'>
      <h1>Update Product</h1>

      {/* <h1>{id}</h1> */}
      <div className='productitem'>
        <label htmlFor="">Enter the product name </label><br />
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}  id="" />
      </div>
      <div className='productitem'>
        <label htmlFor="">Enter the category name </label><br />
        <input type="text"  value={category}   onChange={(e) => { setCategory(e.target.value) }} id="" />
      </div>
      {/* <div className='productitem'>
        <label htmlFor="">Enter the  description</label><br />
        <textarea type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} id="" />
      </div> */}
      <div className='productitem'>
        <label htmlFor="">Enter the price of the product</label><br />
        <input type="number" value={price}  onChange={(e) => { setPrice(e.target.value) }} id="" />
      </div>
      <button onClick={updateDetails}>Update Product</button>


    </div>
  )
}

export default Updateproduct
