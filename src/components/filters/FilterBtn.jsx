

const FilterBtn = ({name,index,item,setPageNo,task}) => {
  return (
    <div>
    <style jsx>
      {`
        .x:checked + label {
          background-color: #0b5ed7;
          color: white;
        }
        input[type="radio"] {
          display: none;
        }
      `}
    </style>

    <div className="form-check">
      <input
        className="form-check-input x"
        type="radio"
        name={name}
        id={`${name}-${index}`}
        onClick={() => {
            setPageNo(1) 
            task(item)
        }}
      />
      <label
        className="btn btn-outline-primary"
        for={`${name}-${index}`}
      >
        {item}
      </label>
    </div>
  </div>
  )
}

export default FilterBtn
