import React from 'react';


const BookCard = (props) => {
return(
        <div className="card-container" >
           <img src={props.img} alt=""/>
           <div className="desc">
           <h2>{props.title}</h2>
           <h3>{props.author}</h3>
           <h3>{props.Link}</h3>
           <h3>{props.published}</h3>
           <p>{props.description}</p>
           
           </div>
        </div>
    )
}

export default BookCard;