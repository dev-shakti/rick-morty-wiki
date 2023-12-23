import FilterBtn from "../FilterBtn";


const Gender = ({setPageNo,setGender}) => {
    let genders = ["female", "male", "genderless", "unknown"];
 
    return (
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                   Gender
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                {genders.map((item,index) => (
                        <FilterBtn 
                        key={index} 
                        name="gender" 
                        index={index}
                        item={item}
                        setPageNo={setPageNo}
                        task={setGender}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gender
