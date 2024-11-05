const Product = require("../model/product")
const express = require('express')
const router = express.Router()


router.get('', async function(req, res){
    foundProduct = await Product.find({})
    return res.json(foundProduct)
})

router.get('/:productId', async function(req, res){
    const productId = req.params.productId
    try {
        foundProduct = await Product.findById(productId)
        return res.json(foundProduct)
    }catch(err){
        return res.status(422).send({errors: [{title: 'product error', detail: 'Product not found!'}]})
    }
})

module.exports = router