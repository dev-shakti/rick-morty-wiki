import styles from "./Cards.module.scss"

styles.badge
const Cards = ({ results }) => {
  
  let display;

  if(results){
    display=results.map(x=> {
      let {id,name,image,location,status}=x;

       return(
       <div key={id} className="col-4 position-relative">
        <div className={styles.cards}>
          <img src={image} alt="" className="img-fluid" />
        
        <div className={styles.content}>
          <div className="fs-4 fw-bold mb-4">{name}</div>
          <div className="">
            <div className="fs-6">Last location</div>
            <div className="fs-5">{location.name}</div>
          </div>
        </div>
        </div>
        {
  (() => {
    
    const badgeClass =
      status === "Dead"
        ? "bg-danger"
        : status === "Alive"
        ? "bg-success"
        : "bg-secondary";

    return (
      <div className={`${styles.badge} badge position-absolute ${badgeClass}`}>
        {status}
      </div>
    );
  })()
}

       </div>
       )
    })
  }
  else{
    display="No characters found :/ "
  }

  return < >{display}</>
  
}

export default Cards
