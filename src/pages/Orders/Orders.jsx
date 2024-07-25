// import { useContext, useEffect, useState } from "react"
// import Layout from "../../components/Layout"
// import { DataContext } from "../../components/DataProvider/DataProvider"
// import classes from './Orders.module.css'
// import {db} from '../../Utility/Firebase'
// import ProductCard from "../../components/Product/ProductCard"


// const Orders = () => {
//   const [{user},dispatch] = useContext(DataContext)
//   const [order,setOrder] = useState([])
//   useEffect(()=> {
//     if(user){
//       db.collection('users')
//       .doc(user.uid)
//       .collection('orders')
//       .orderBy('created','desc')
//       .onSnapshot((snapShot)=>{
//         console.log(snapShot)
//         setOrder(
//           snapShot.docs.map((doc)=>({
//             id:doc.id,
//             data:doc.data()
//           }))
//         )
//       })
      
//     } else{
//       setOrder([])

//     }



//   },[])
//   return (
//     <Layout>
//       <section className={classes.container}>
//         <div className={classes.orders_container}>
//           <h2>Your Orders</h2>
//           {/* ordered items */}
//           <div>
//             {order?.map((eachOrder, i) => (
//               <div key={i} className={classes.order_item}>
//                 <hr />
//                 <p>Order ID: {eachOrder?.id}</p>
//                 {
//                   eachOrder?.data?.basket?.map(order)=>{
//                     <ProductCard
//                     flex={true}
//                     product={order}
//                     key={order.id}
//                     />
//                   })
//                 }
              
              
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default Orders


































// import { useContext, useEffect, useState } from "react";
// import Layout from "../../components/Layout";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import classes from "./Orders.module.css";
// import { db } from "../../Utility/Firebase";
// import ProductCard from "../../components/Product/ProductCard";
// import { collection, doc, orderBy, onSnapshot } from "firebase/firestore";

// const Orders = () => {
//   const [{ user }, dispatch] = useContext(DataContext);
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     if (user) {
//       const ordersCollection = collection(db, "users", user.uid, "orders");
//       const q = query(ordersCollection, orderBy("created", "desc"));

//       const unsubscribe = onSnapshot(q, (snapShot) => {
//         console.log(snapShot);
//         setOrder(
//           snapShot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//           }))
//         );
//       });

//       // Cleanup the subscription on unmount
//       return () => unsubscribe();
//     } else {
//       setOrder([]);
//     }
//   }, [user]); // Dependency array includes user

//   return (
//     <Layout>
//       <section className={classes.container}>
//         <div className={classes.orders_container}>
//           <h2>Your Orders</h2>
//           {/* ordered items */}
//           <div>
//             {order?.map((eachOrder) => (
//               <div key={eachOrder.id} className={classes.order_item}>
//                 <hr />
//                 <p>Order ID: {eachOrder?.id}</p>
//                 {eachOrder?.data?.basket?.map((orderItem) => (
//                   <ProductCard
//                     flex={true}
//                     product={orderItem}
//                     key={orderItem.id}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Orders;





































import { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { DataContext } from "../../components/DataProvider/DataProvider";
import classes from "./Orders.module.css";
import { db } from "../../Utility/Firebase";
import ProductCard from "../../components/Product/ProductCard";
import {
  collection,
  query,
  doc,
  orderBy,
  onSnapshot,
} from "firebase/firestore"; // Import query

const Orders = () => {
  const [{ user }, dispatch] = useContext(DataContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    if (user) {
      const ordersCollection = collection(db, "users", user.uid, "orders");
      const q = query(ordersCollection, orderBy("created", "desc"));

      const unsubscribe = onSnapshot(q, (snapShot) => {
        console.log(snapShot);
        setOrder(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Cleanup the subscription on unmount
      return () => unsubscribe();
    } else {
      setOrder([]);
    }
  }, [user]); // Dependency array includes user

  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.orders_container}>
          <h2>Your Orders</h2>
          {/* ordered items */}
          <div>
            {order?.map((eachOrder) => (
              <div key={eachOrder.id} className={classes.order_item}>
                <hr />
                <p>Order ID: {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((orderItem) => (
                  <ProductCard
                    flex={true}
                    product={orderItem}
                    key={orderItem.id}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Orders;
