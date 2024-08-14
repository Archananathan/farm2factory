import React, { useState } from 'react';

const InventoryManagement = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    // Logic to add item
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Inventory Management</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input type="text" placeholder="Search by item name" style={{ flex: 1, marginRight: '10px', padding: '10px' }} />
        <button onClick={handleAddItem} style={{ padding: '10px' }}>Add Item</button>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Item Name</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Quantity</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Price</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ddd' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '20px' }}>
                <div>
                  <img src="path/to/your/image" alt="No data" style={{ marginBottom: '10px' }} />
                  <p>No data</p>
                </div>
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.name}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.quantity}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.price}</td>
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

export default InventoryManagement;
