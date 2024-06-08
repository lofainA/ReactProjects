import SearchBar from "./SearchBar";
import React, { useState } from "react";

function App() {

  return(
    <>
      <FilterableProductTable products={ PRODUCTS } />
    </>
  )
}

function ProductRow({ product,inStock }){
  
  const name = product.stocked ? product.name :
  <span style={{ color:'rgb(117, 0, 0)' }}>
    {product.name}
  </span>

  return(
    <tr>
      <td>{ name }</td>
      <td>{ product.price }</td>
    </tr>
  );

}

function ProductCategoryRow({ category }){

  return(
      <tr>
        <th className='category-row'>{ category }</th>
      </tr>
  );

}


function ProductTable({ products,input,inStock }){

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {

    if (inStock && !product.stocked) {
      return;
    }

    if(input === "") {
      if(product.category !== lastCategory){
        rows.push(
  
          <ProductCategoryRow 
           category={ product.category }
           key={ product.category } />
        );
  
        lastCategory = product.category;
      }
  
      rows.push(
        <ProductRow 
         product={ product }
         key={ product.name }/>
      );
    }

    else {
      if(product.category.toLowerCase() === input.toLowerCase()) {
        if(product.category !== lastCategory){
          rows.push(
    
            <ProductCategoryRow 
             category={ product.category }
             key={ product.category } />
          );
    
          lastCategory = product.category;
        }
    
        rows.push(
          <ProductRow 
           product={ product }
           key={ product.name }/>
        );
      }
    }
  });

  return(
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{ rows }</tbody>
    </table>
  );
}



function FilterableProductTable({ products }){

  const[input, setInput] = useState("");
  const[inStock, setInStock] = useState(false);

  return(
    <div className="product-table">
      <SearchBar input={input}
                 inStock={inStock}
                 onInputChange={setInput}
                 onInStockChange={setInStock}/>
      <ProductTable products={ products }
                    input={input}
                    inStock={inStock}/>
    </div>
  );

}

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default App