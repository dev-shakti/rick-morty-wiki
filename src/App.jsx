import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Filter from "./components/filters/Filter"
import Search from "./components/search/Search"
import Pagination from "./components/pagination/Pagination"
import Cards from "./components/cards/Cards"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Episodes from "./pages/Episodes"
import Location from "./pages/Location"
import "./index.css"

const App = () => {
   return (
    <Router>
      <div className="App">
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </Router>
   )
}

function Home() {

  const [pageNo, setPageNo]=useState(1);
  const [search,setSearch]=useState("")
  const [status,setStatus]=useState("")
  const [gender,setGender]=useState('')
  const [species,setSpecies]=useState('')
  const [fetchData,setFetchData]=useState([]);
  const {info,results}=fetchData;
  console.log(info)

  let api=`https://rickandmortyapi.com/api/character/?page=${pageNo}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  const fetchAPiData = async() => {
     try {
      const response=await fetch(api);
      const data=await response.json()
      setFetchData(data)
     } catch (error) {
      console.error('Error fetching data:', error.message);
     }
  }

  useEffect(() => {
    fetchAPiData()
  }, [api] )

  return (
    <div className="Home">
      <h1 className="text-center ubuntu my-4">
        Rick and Monty <span className="text-primary">Wiki</span>
        </h1>
      <Search 
      setSearch={setSearch}
      setPageNo={setPageNo}
      />
      <div className="container ">
        <div className="row">         
            <Filter 
            setPageNo={setPageNo}
            setStatus={setStatus}
            setGender={setGender}
            setSpecies={setSpecies}
            />    
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination 
      setPageNo={setPageNo}
      pageNo={pageNo}
      info={info}
      />
    </div>
  )
}

export default App
