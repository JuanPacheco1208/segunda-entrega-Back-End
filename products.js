const express = require('express');
const app = express();
const port = 8080;

// Almacenamiento de productos
let products = [
  { id: 1, name: 'Producto 1', price: 10.00, category: 'Categoría 1', description: 'Descripción del producto 1' },
  { id: 2, name: 'Producto 2', price: 20.00, category: 'Categoría 2', description: 'Descripción del producto 2' },
  // ...
  { id: 10, name: 'Producto 10', price: 100.00, category: 'Categoría 10', description: 'Descripción del producto 10' },
];

// Middleware para procesar el cuerpo de la solicitud HTTP
app.use(express.json());

// Crear un nuevo producto
app.post('/products', (req, res) => {
  const newProduct = req.body;
  newProduct.id = products.length + 1;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Obtener todos los productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Obtener un solo producto por ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Actualizar un producto existente por ID
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex(p => p.id === productId);
  if (productIndex !== -1) {
    products[productIndex] = req.body;
    products[productIndex].id = productId;
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Eliminar un producto existente por ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
})

