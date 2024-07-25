import Layout from "../../components/Layout"
import { useParams } from "react-router-dom";
import axios from 'axios'
import { productURL } from "../../API/EndPoints";
import { useEffect, useState } from "react";
import classes from './Results.module.css'
import ProductCard from "../../components/Product/ProductCard";

const Reaults = () => {
  const [results,setResults]=useState([])
  const {catagoryName} = useParams();
  useEffect(()=>{
     axios
       .get(`${productURL}/products/category/${catagoryName}`)
       .then((res) => {
         console.log(res);
         setResults(res.data);
       })
       .catch((err) => {
         console.log(err);
       });

  },[catagoryName])
 
  
  return (

    <Layout>
       <section>
        <h1 style={{ padding:"30px" }}>Results</h1>
        <p style={{ padding:"30px" }}>Category / {catagoryName}</p>
        <hr />
        <div className={classes.product_container}>
          {results?.map((product)=>(
            <ProductCard
            key={product.id}
            product={product}
            renderAdd={true}
            desc={false}
            />
          ))}
        </div>
       </section>
    </Layout>
   
  )
}

export default Reaults




























