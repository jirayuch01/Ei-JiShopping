var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');

router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Ei-Ji Games Shopping',
      products: productChunks
    });
  });
});

router.get('/add-to-cart/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  Product.findById(productId, function (err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/');
  });
});

router.get('/basket', function (req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/basket', {
      title: 'Ei-Ji Games Shopping',
      products: null
    });
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/basket', {
    title: 'Ei-Ji Games Shopping',
    products: cart.generateArray(),
    totalPrice: cart.totalPrice,
    totalQty: cart.totalQty
  });
});

router.get('/contact', function (req, res, next) {
  res.render('shop/contact', {
    title: 'Ei-Ji Games Shopping'
  });
});

router.get('/checkout', function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/basket');
  }
  var cart = new Cart(req.session.cart);
  res.render('shop/checkout', {
    title: 'Ei-Ji Games Shopping',
    total: cart.totalPrice
  });
});

module.exports = router;