const API_KEY="2pDdssHi57XgIBKLkRhOypd5T5jlcSP9EqulqAxsWLr6eC7mFJVmKct5"
const API="https://api.pexels.com/v1/search?query=people"

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 p-12">
      <h1 className="text-center text-5xl text-blue-600 font-bold">
        📷 Image Gallery-Nature</h1>
      <div className="text-center mt-8">
        <input type="search" placeholder="Image Search" className="p-3 bg-white rounded-l-2xl
        focus:outline-indigo-600 w-[350px]
        "/>
        <button className="p-3 bg-linear-to-br from-indigo-700 via-blue-400 to-teal-700 px-8 rounded-r-2xl hover:scale-105
        transition-transform duration-300
        ">Search</button>
      </div>
      <div className="grid lg:grid-cols-4 gap-5 mt-8">
        {
          Array(12).fill(0).map((item,index)=>(
            <div className="p-12 bg-amber-500 rounded-2xl">
              {item}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
