import React from "react";
import FilterableProductTable from './FilterableProductTable';
import { PRODUCTS } from './PRODUCTS';

function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}

export default App
