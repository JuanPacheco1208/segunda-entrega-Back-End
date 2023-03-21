const Product = require('./models/Product');
const mongoosePaginate = require('mongoose-paginate-v2');

app.get('/api/products', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const options = {
      page,
      limit
    };

    

    const { docs, totalPages, prevPage, nextPage, page: currentPage, hasNextPage, hasPrevPage } = await Product.paginate({}, options);
    
    const payload = docs.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: product.price
      };
    });

    const prevLink = hasPrevPage ? `${req.protocol}://${req.get('host')}/api/products?page=${prevPage}&limit=${limit}` : null;
    const nextLink = hasNextPage ? `${req.protocol}://${req.get('host')}/api/products?page=${nextPage}&limit=${limit}` : null;

    res.json({
      status: 'success',
      payload,
      totalPages,
      prevPage,
      nextPage,
      page: currentPage,
      hasPrevPage,
      hasNextPage,
      prevLink,
      nextLink
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
});
