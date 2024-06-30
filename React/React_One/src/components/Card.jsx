import React from 'react'

const Card = (props) => {
  return (
    
      <div className="card p-5"  style={{width:"18rem"}}>
          <div className="card-body text-center">
            <img src={props.product.image} alt="" height="100px"/>
            <p className="card-title text-truncate text-primary fs-5">{props.product.title}</p>
            <p className="card-text text-secondary text-truncate small">{props.product.description}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
    
  )
}

export default Card
