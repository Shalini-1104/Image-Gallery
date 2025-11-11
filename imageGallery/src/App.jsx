import 'remixicon/fonts/remixicon.css'
import axios from "axios"
import { useEffect, useState } from "react"
const API_KEY="2pDdssHi57XgIBKLkRhOypd5T5jlcSP9EqulqAxsWLr6eC7mFJVmKct5"
// const API="https://api.pexels.com/v1/search?query=people"

const option ={
  headers:{
    authorization :API_KEY
  }
}
const App = () => {
  const [imageData,setImageData]=useState([]);
  const [page,setPage]=useState(1)
  const [query,setQuery]=useState("nature")
  const [loading,setLoading]=useState(false)
  const fetchData=async()=>{
    try{
      setLoading(true)
      let {data} = await axios.get(`https://api.pexels.com/v1/search?query=${query}&page${page}&per_page=12`,option);
      setImageData((prev)=>([...prev, ...data?.photos]))
    }
    catch(error){

    }finally{
          setLoading(false)
    }
  }

  const searchImage=(e)=>{
     e.preventDefault();
    const val= e.target[0].value.trim()
    setImageData([])
    setQuery(val)
  }
  const loadMoreImage=()=>{
    setPage(page+1)
  }
  useEffect(()=>{
    fetchData()
  },[page,query])
 
  return (
    <div className="min-h-screen bg-gray-300 p-12">
      <h1 className="text-center text-5xl text-blue-600 font-bold">
        📷 Image Gallery-Nature</h1>
      <form className="text-center mt-8" onSubmit={searchImage}>
        <input type="search" placeholder="Image Search" className="p-3 bg-white rounded-l-2xl
        focus:outline-indigo-600 w-[350px]
        "/>
        <button type="submit" className="p-3 bg-linear-to-br from-indigo-700 via-blue-400 to-teal-700 px-8 rounded-r-2xl hover:scale-105
        transition-transform duration-300
        ">Search</button>
      </form>
      <div className="grid lg:grid-cols-4 gap-5 mt-8 ">
        {
          imageData?.map((item,index)=>(
            <div  key={index}className="p-2 bg-white rounded-2xl">
              <img src={item?.src.medium} alt={item?.src.medium} className="h-50 w-full rounded-xl object-cover "/>
            </div>
          ))
        }
      </div>
      {
        loading&&(
      <i className="ri-loader-2-line text-5xl text-amber-400 animate-spin"></i>
        )  
    }
      <div className="w-full text-center">

      <button onClick={loadMoreImage} className="py-2 px-16 rounded-2xl mt-5  bg-rose-400">Load More</button>
      </div>
    </div>
  )
}

export default App
