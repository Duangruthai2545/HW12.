import React from "react";
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import './styles.css';

function ProductTable({ products }) {
  const tableStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '22px',
    color: '#fff',
    padding: '15px',
  };


  const tableHeaderStyle = {
    backgroundColor: '#f2f2f2',
    borderBottom: '1px solid #ddd',
  };

  const columnHeaderStyle = {
    padding: '8px',
    width: '100px',
    fontSize: '18px',
    borderRadius: '4%',
    background: '#3498db',
    color: '#fff',
  };


  const rowStyle = {
    fontSize: '14px',
    background: 'rgba(0, 128, 0, 0.1)',
    borderRadius: '4%',
  };


  const categoryRows = products
    .filter((product, index, array) => array.findIndex(p => p.category === product.category) === index)
    .map(product => (
      <ProductCategoryRow
        category={product.category}
        key={product.category}
      />
    ));

  const productRows = products
    .map((product, index) => (
      <React.Fragment key={product.name}>
        {index === 0 || index === 3 ? (
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        ) : null}
        <ProductRow
          product={product}
          key={product.name}
          style={rowStyle}
        />
      </React.Fragment>
    ));

  return (
    <div style={tableStyle}>
      <thead>
        <tr style={tableHeaderStyle}>
          <th style={columnHeaderStyle}>Name</th>
          <th style={columnHeaderStyle}>Price</th>
        </tr>
      </thead>
      {productRows}
    </div>
  );
}

export default ProductTable
