import Gender from "./catagory/Gender"
import Species from "./catagory/Species"
import Status from "./catagory/Status"


const Filter = ({setStatus,setPageNo,setGender,setSpecies}) => {

  const clearAll = () => {
    setStatus("")
    setPageNo(1)
    setGender("")
    setSpecies("")
    window.location.reload(false)
  }
  return (
    <div className="col-3">
      <div className="fs-3 fw-bold mb-2 text-center " style={{cursor:"pointer"}}>
        Filter
        </div>
      <div onClick={clearAll}
      className="fs-4 text-primary mb-4 text-center text-decoration-underline"
      >
        Clear All
        </div>
      {/* Accordion */}
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNo={setPageNo}/>
        <Species setPageNo={setPageNo} setSpecies={setSpecies}/>
        <Gender setPageNo={setPageNo} setGender={setGender}/>
        
      </div>
    </div>
  )
}

export default Filter
