import Landing from "./pages/Landing/Landing"
import Routing from './Routing'
import { DataContext } from "./components/DataProvider/DataProvider"
import { Type } from "./Utility/action"
import { auth } from "./Utility/Firebase"
import { useContext, useEffect } from "react"




const App = () => {
  //this is done to manage the state when user sign in and out
  const [{user},dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // console.log(authUser)
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      } else{
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
      }


    })
  },[])



  return (
    <div className="font-bodyFont">
    <Routing>
    <Landing/>
    </Routing>
    
  
     
    </div>
  )
}

export default App