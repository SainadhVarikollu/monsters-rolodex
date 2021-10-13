import React from 'react';


const SearchBox=({placeholder,handleSearch})=>(
  
    <input type="search"
    className="search"
     placeholder={placeholder}
      
      onChange={handleSearch}
      
      />

)

export default SearchBox;