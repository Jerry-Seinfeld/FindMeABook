import React from 'react';


const Search = (props) => {
return(
<div className="Search">
<form onSubmit={props.searchBookName} action="">
<input onChange={props.handlebox} type="text"/>
<button type="submit">Search</button>
</form>


</div>
    )
}

export default Search;