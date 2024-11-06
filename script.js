// server.js
const express = require('express');
const app = express();
const port = 3000;

// Mock product data
const products = [
    { id: 1, name: 'Product 1', lastUpdated: '2023-09-01', description: 'Description of Product 1', pdfUrl: '/pdfs/product1.pdf' },
    { id: 2, name: 'Product 2', lastUpdated: '2023-08-15', description: 'Description of Product 2', pdfUrl: '/pdfs/product2.pdf' },
    // Add more products as needed
];

// API endpoint
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
