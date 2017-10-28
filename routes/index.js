var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order'); 

router.get('/', function (req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find({}).sort({ price: 'asc' }).limit(9).exec(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Ei-Ji Games Shopping',
      products: productChunks,
      successMsg: successMsg,
      noMessage: !successMsg
    });
  });
});

router.get('/page/1', function (req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find({}).sort({ price: 'asc' }).limit(9).exec(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Ei-Ji Games Shopping',
      products: productChunks,
      successMsg: successMsg,
      noMessage: !successMsg
    });
  });
});

router.get('/page/2', function (req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find({}).sort({ price: 'asc' }).limit(9).skip(9).exec(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Ei-Ji Games Shopping',
      products: productChunks,
      successMsg: successMsg,
      noMessage: !successMsg
    });
  });
});

router.get('/page/3', function (req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find({}).sort({ price: 'asc' }).limit(9).skip(18).exec(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Ei-Ji Games Shopping',
      products: productChunks,
      successMsg: successMsg,
      noMessage: !successMsg
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
    console.log("add: " + req.session.cart)
    res.redirect('/');
  });
});

router.get('/reduce/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  console.log("reduce: " + req.session.cart)
  res.redirect('/basket');
});

router.get('/remove/:id', function (req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.removeItem(productId);
  req.session.cart = cart;
  console.log("remove: " + req.session.cart)
  res.redirect('/basket');
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

router.get('/checkout', isLoggedIn, function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/basket');
  }
  var cart = new Cart(req.session.cart);
  var errMsg = req.flash('error')[0];
  res.render('shop/checkout', {
    title: 'Ei-Ji Games Shopping',
    total: cart.totalPrice,
    errMsg: errMsg,
    noErrors: !errMsg
  });
});

router.post('/checkout', isLoggedIn, function (req, res, next) {
  if (!req.session.cart) {
    return res.redirect('/basket');
  }
  var cart = new Cart(req.session.cart);
  var stripe = require("stripe")("sk_test_MKryMB40n27BUpYoTTm4Grw4");
  stripe.charges.create({
    amount: cart.totalPrice,
    currency: "usd",
    // source: req.body.stripeToken,
    source: "tok_mastercard",
    description: "Test Charge."
  }, function (err, charge) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
    }
    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      paymentId: charge.id,
    });
    order.save(function (err, result) {
      req.flash('success', 'Successfully bought product!');
      req.session.cart = null;
      res.redirect('/');
    });
  });
});

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}