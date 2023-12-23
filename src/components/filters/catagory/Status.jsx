import FilterBtn from "../FilterBtn"


const Status = ({setPageNo,setStatus}) => {
    const status=["Alive", "Dead", "Unknown"]
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    Status
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                    {status.map((item,index) => (
                        <FilterBtn 
                        key={index} 
                        name="status" 
                        index={index}
                        item={item}
                        setPageNo={setPageNo}
                        task={setStatus}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Status
