import React, { useState } from 'react';

const User = () => {
  const [customers, setCustomers] = useState([
    { name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  ]);

  return (
    <>
    <div style={styles.container}>
      <header style={styles.header}>
        <button style={styles.addButton}>Add New Customer</button>
        <input style={styles.searchBar} type="text" placeholder="Search customers..." />
      </header>
      <div style={styles.customersList}>
        {customers.map((customer, index) => (
          <div key={index} style={styles.customerCard}>
            <h3 style={styles.customerName}>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  addButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  searchBar: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: '200px',
  },
  customersList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  customerCard: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '10px',
  },
  customerName: {
    margin: '0 0 10px 0',
  },
};

export default User;
