const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product]
  })
  .then((categories)=>{
    res.status(200).json(categories)
  })
  .catch((err)=>
  res.status(500).json(err)
  )
});

// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findOne({
    include: [Product],
    where: {id: req.params.id}
  })
  .then((category)=>{
    res.status(200).json(category)
  })
  .catch((err)=>
  res.status(400).json(err)
  )
});

// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
  .then((newCategory)=> {
    res.status(200).json(newCategory)
  })
  .catch((err)=>
  res.status(400).json(err)
  )
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
