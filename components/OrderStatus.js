import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const orders = [
  { id: 1, status: 'Delivered', date: '2023-01-01' },
  { id: 2, status: 'Pending', date: '2023-01-02' },
  { id: 3, status: 'Processing', date: '2023-01-03' },
  { id: 4, status: 'Delivered', date: '2023-01-04' },
];

const OrderStatus = () => (
  <div>
    <Typography variant="h6">Order Status</Typography>
    <List>
      {orders.map((order) => (
        <div key={order.id}>
          <ListItem>
            <ListItemText primary={`Order ${order.id}`} secondary={`Status: ${order.status} - Date: ${order.date}`} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  </div>
);

export default OrderStatus;
