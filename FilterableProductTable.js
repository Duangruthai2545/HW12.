import React from "react";
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function FilterableProductTable({ products }) {
  
    return (
      <div class="box">
        <div class="centers"> 
          <SearchBar />
        </div>
        <div>
          <ProductTable products={products} />
          </div>
      </div>
      
    );
  }

export default FilterableProductTable