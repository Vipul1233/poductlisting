import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { AiFillDelete, AiFillEdit } from "react-icons/ai";
function Product() {
    const [products, setProducts] = useState([]);
    
    

    useEffect(() => {
        // if (!loading) return;
        getProducts();
        // console.log(products);
    }, []);
    const getProducts = async () => {
        let result = await fetch("http://localhost:5000/products");
        result = await result.json();
        setProducts(result);
       
        // setLoading(false);
    }
   

    const deleteElement = async (id) => {
        let result = await fetch(`http://localhost:5000/products/${id}`, {
            method: "Delete"
        });
        result = await result.json();
        if (result) {
            getProducts();
        }
    }
    const searchHandle = async (event)=>{
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json()
            if(result){
                setProducts(result)
            }
        }else{
            getProducts();
        }
        
    }

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //   if (!loading) return;
    //   const fetchData = async () => {
    //     const response = await fetch(
    //         "http://localhost:3000/products"
    //     );
    //     const data = await response.json();
    //     setProducts(data);
    //     setLoading(false);
    //   };
    //   fetchData();
    // }, [loading]);




    return (
        <div className='product-list'>
           
            <h3>List of products</h3>
            <input type="text" className='search-product-box' placeholder='Search Product'
            onChange={searchHandle}
             />
            <div className='productcontainer'>

                


                {
                   products.length>0 ?  products.map((item, index) => {
                        return (<>
                            <div className='card'>
                                <h3 >{item.name}</h3>
                                <h4 >{item.category}</h4>
                                {/* <p >{item.description}</p> */}
                                <p className='productprice'>$ {item.price}</p>
                                

                                <button onClick={() => deleteElement(item._id)}><AiFillDelete size={20} /></button>
                                <Link to={"/updateproduct/" + item._id}><AiFillEdit size={20} /></Link>
                            </div>
                        </>)

                    })
                    :<h1>No Result Found</h1>

                }
               




            </div>
        </div>
    )
}

export default Product
