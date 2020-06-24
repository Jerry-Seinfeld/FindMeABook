import React from 'react';



const BookCard = (props) => {

    const handleClickEvent = (location) => {
        window.location.href = location;
    }

    return(
        <div className="card-container" >
           <img src={props.img} alt=""/>
           <div className="desc">
           <h2>{props.title}</h2>
           <h3>{props.author}</h3>
           <button onClick={(e) => {handleClickEvent(props.Link)}}>View</button>
           <h3>{props.published}</h3>
           <p>{props.description}</p>
           </div>
        </div>
    )
}

export default BookCard;