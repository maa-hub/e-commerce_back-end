const { Product } = require('../models');

const productData = [
  {
    product_name: 'MK Plain Beach Shorts',
    price: 10.69,
    stock: 12,
    category_id: 2,
  },
  {
    product_name: 'MK Swim Suit Set',
    price: 6.99,
    stock: 25,
    category_id: 3,
  },
  {
    product_name: 'MK Plain Pants',
    price: 24.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'MK Maxi Dress',
    price: 30.59,
    stock: 20,
    category_id: 5,
  },
  {
    product_name: 'MK Bandeau Tops',
    price: 5.99,
    stock: 22,
    category_id: 1,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
