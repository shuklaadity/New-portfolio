
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/Home/About";
import Projects from "./Pages/Home/Projects";
import Header from "./Component/Header";
import Footer from "./Pages/Home/Footer";
import Leftsider from "./Pages/Home/Leftsider";
import { useEffect} from "react";
import Loader from "./Component/Loader";
import Contact from "./Pages/Home/Contact";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Hideloading, Setportfoliodata, Showloading } from "./redux/RootSlice";
import Admin from "./Admin/Index";

function App() {
 

  const dispatch = useDispatch()
  const {loading,portfoliodata} = useSelector((state)=>state.root)

   const getportfoliodata = async ()=>{
     try {
       dispatch(Showloading())
      const response = await axios.get('/api/portfolio/get-portfolio-data');
      dispatch(Setportfoliodata(response.data))
      dispatch(Hideloading())
       
      
     } catch (error) {
       console.log("data is not found" , error.response);
       dispatch(Hideloading())
     }
   }


   useEffect(()=>{
     getportfoliodata()
   },[])
   useEffect(()=>{
      if(!portfoliodata){
        getportfoliodata()
      }
        console.log(portfoliodata)
   },[portfoliodata])
  return (
  
      
    <div className="bg-color1 px-40 sm:px-7">
     <BrowserRouter >
      <Header/>
     {
       loading===true?<Loader/>: null
     }
      
       
       <Routes >
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
       </Routes>
       <Leftsider/>
       <Footer/>
      
    </BrowserRouter>
   </div>
  
  
    
  );
}

export default App;
