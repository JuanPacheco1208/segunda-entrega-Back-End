const express = require('express');
const app = express();
const port = 8080;

// Enrutador para el grupo de rutas /products
const productsRouter = express.Router();
productsRouter.get('/', (req, res) => {
  res.send('Esta es la ruta para mostrar todos los productos');
});
productsRouter.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Esta es la ruta para mostrar el producto con ID ${productId}`);
});

// Enrutador para el grupo de rutas /carts
const cartsRouter = express.Router();
cartsRouter.get('/', (req, res) => {
  res.send('Esta es la ruta para mostrar todos los carritos');
});
cartsRouter.get('/:id', (req, res) => {
  const cartId = req.params.id;
  res.send(`Esta es la ruta para mostrar el carrito con ID ${cartId}`);
});

// Agregar los enrutadores al servidor
app.use('/products', productsRouter);
app.use('/carts', cartsRouter);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
