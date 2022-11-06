const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//get ALL categories
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

//Get SINGLE category
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

// update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    req.body, 
   {where: {id: req.params.id}}
  )
  .then((updateCategory)=>{
    res.status(200).json(updateCategory)
  })
  .catch((err)=>
  res.status(400).json(err)
  )
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({where: {id: req.params.id}})
  .then(()=>{
    res.status(200).json({message:'category deleted!'})
  })
  .catch((err)=>
  res.status(400).json(err)
  )
});

module.exports = router;
