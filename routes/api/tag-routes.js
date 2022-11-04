const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [Product, {model: Product, through: ProductTag}]
  }).then((tags)=>{
    res.status(200).json(tags)
  })
  .catch((err)=>
  res.status(500).json(err)
  )
});

router.get('/:id', (req, res) => {
  Tag.findAll({
    include: [Product, {model: Product, through: ProductTag}],
    where: {id: req.params.id}
  }).then((tag)=>{
    res.status(200).json(tag)
  })
  .catch((err)=>
  res.status(500).json(err)
  )
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
