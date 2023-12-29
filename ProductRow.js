import React from "react";

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  const tableStyle = {
    borderCollapse: "collapse",
    width: "60%",
  };

  const cellStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    borderCollapse: "collapse",
    width: "80%",
  };

  const cellPrice = {
    border: "1px solid #ddd",
    padding: "8px",
    textAlign: "left",
    color: 'gold',
  };

  return (
    <table style={tableStyle}>
      <tr>
        <td style={cellStyle}>{name}</td>
        <td style={cellPrice}>{product.price}</td>
      </tr>
    </table>
  );
}

export default ProductRow;
