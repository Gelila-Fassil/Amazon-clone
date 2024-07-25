// import { useParams } from "react-router-dom"
// import Layout from "../../components/Layout"
// import axios from 'axios'
// import { useEffect, useState } from "react"
// import { productURL } from "../../API/EndPoints"
// import ProductCard from "../../components/Product/ProductCard"

// const ProductDetail = () => {
//   const {productId} =useParams()
//   const [product,setProduct] = useState({})
 
//   useEffect(()=>{
//     axios.get(`${productURL}/products/${productId}`)
//     .then((res)=>{
//       setProduct(res.data)
//     }).catch((err)=>{
//       console.log(err)
//     })

//   },[productId])

//   return (
//     <Layout>
//       <ProductCard product={product} />
//     </Layout>
//   );
// }

// export default ProductDetail


























import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { productURL } from "../../API/EndPoints";
import ProductCard from "../../components/Product/ProductCard";
import Lodder from "../../components/Lodder";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${productURL}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Error fetching product details.");
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <Layout>
       <Lodder/>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <p>{error}</p>
      </Layout>
    );
  }

  return <Layout>{product && <ProductCard product={product} flex={true} desc={true} renderAdd={true}/>}
 
  </Layout>;
};

export default ProductDetail;
