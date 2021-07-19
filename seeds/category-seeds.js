const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Tops',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Swim',
  },
  {
    category_name: 'Pants',
  },
  {
    category_name: 'Dress',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
