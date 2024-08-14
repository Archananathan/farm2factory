import React, { useState } from 'react';

const SalesReports = () => {
  const [sales, setSales] = useState([]);

  const handleAddSale = () => {
    // Logic to add sale
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Sales Reports</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <button onClick={handleAddSale} style={{ padding: '10px', marginRight: '10px' }}>Add Sale</button>
        <input type="date" placeholder="Start date" style={{ padding: '10px', marginRight: '10px' }} />
        <input type="date" placeholder="End date" style={{ padding: '10px', marginRight: '10px' }} />
        <select style={{ padding: '10px' }}>
          <option value="all">All Categories</option>
          <option value="all">Husk</option>
          <option value="all">Stem</option>
          <option value="all">Animal Waste</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Date</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Item Name</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Quantity Sold</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Total Sales</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {sales.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center', padding: '20px' }}>
                <div>
                  <img src="path/to/your/image" alt="No data" style={{ marginBottom: '10px' }} />
                  <p>No data</p>
                </div>
              </td>
            </tr>
          ) : (
            sales.map((sale, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{sale.date}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{sale.itemName}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{sale.quantitySold}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{sale.totalSales}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReports;
