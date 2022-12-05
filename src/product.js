import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export const Product=()=>{
    const[item,setItem]=useState([])
    useEffect(()=>{
            fetch("https://fakestoreapi.com/products?limit=20")
            .then(response=>response.json())
            .then(json=>setItem(json));
            
    },[])

    return(
        <div>
            <div>
                <div className='row mt-5'>
                    
            <table className='col-lg-12 text-center border'>
                        <thead >
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                item.map((element,index)=>
                                            <tr>
                                                <td>{element.id}</td>
                                                <td>{element.title}</td>
                                                <td>{element.price}</td>
                                                <td>{element.description}</td>
                                                <td>{element.category}</td>
                                                <td><img src={element.image}/></td>
                                                <td>{element.rating.rate}</td>
                                            </tr>      
                                
                            )}
                        </tbody>
            </table>
            
            </div>
            </div>
        </div>
    )
}