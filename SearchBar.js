import React from "react";

function SearchBar() {
  const cen = {
    marginLeft: '440px',
    opacity: 0.7
  }

  const labelStyle = {
    color: 'white', 
    fontSize: '16px',
  };

  return (
    <form>
      <div style={{ position: 'relative' }}>
        <input type="text" placeholder="Search..." style={{ width: '250px', height: '35px', paddingLeft: '30px' }} />
        <span style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
          <i className="fas fa-search" style={ cen } ></i>
        </span>
      </div>
      <br />
      <label style={labelStyle}>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}


  export default SearchBar