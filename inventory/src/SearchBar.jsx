import React, { useEffect, useState } from "react";


function SearchBar({ input,inStock,onInputChange,onInStockChange }) {

  useEffect(() => {
    console.log(input);
    console.log(inStock);
  }, [input, inStock]);


  return(
    <div className="search-bar"> 
      <input className="item-input" 
             placeholder="Search..."
             value={input}
             onChange={(e) => onInputChange(e.target.value)}/>

      <br/><br/>

      <input type="checkbox" 
             checked={inStock}
             onChange={(e) => onInStockChange(e.target.checked)}/>
      <label>Only show products in stock</label>
    </div>
  );
}

export default SearchBar;