const Product=require('../models/product.model')

exports.test=(req,res)=>{
    res.send("Hello from the other side.")
}

exports.product_create=(req,res)=>{
    let product = new Product({
        Pname: req.body.Pname,
        price: req.body.price
    })


    product.save((err)=>{
        if (err){
            return next(err);
        }
        res.send("Product created successfully")
    })
}

exports.product_details=(req,res)=>{
    Product.findById(req.params.id, (err,product)=>{
        if (err) return next(err);
        res.send(product);
    })    
}

exports.product_update=(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,{$set: req.body}, (err,product)=>{
        if (err) return next(err);
        res.send('product updated.');
    })
}

exports.product_delete=(req,res)=>{
    Product.findByIdAndRemove(req.params.id, (err)=>{
        if (err) return next(err);
        res.send('product deleted successfully.')
    })
}