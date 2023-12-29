import React from "react";

function ProductCategoryRow({ category }) {
  const tableStyle = {
    margin:'5px',
    padding:'6px',
  };

    return (
      <tr style = {tableStyle}>
        <th>
          {category}
        </th>
      </tr>
    );
  }

export default ProductCategoryRow