const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://129.194.184.60:27017', (err, database) => {

  if(err) return console.log(err);

  const db = database.db("order").collection("orders");

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.listen(3000, function() {
    console.log('listening on 3000')
  });

  app.get("/", (req, res) => {

    const message = {message: "Node is fun! Isn't it?"};

    res.setHeader('Content-Type', 'application/json');
    db.find({}).limit(10).toArray( (err, data) => res.json(data));


  });

  app.get("/messages", (req, res) => {
    const messages = [{id: 1, message: "Coucou"}, {id: 2, message: "Salut"}];
    res.json( messages );
  });

  app.get("/messages/:id", (req, res) => {
    const id = +req.params.id;
    const messages = [{id: 1, message: "Coucou"}, {id: 2, message: "Salut"}];
    res.json( messages.find( m => m.id === id ));
  });

  app.get("/vendors", (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    db.distinct("vendors.slug", {}, (err, data) => res.json(data));
  });

  app.get("/vendorsdetails", (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    //db.distinct("vendors.slug", {}, (err, data) => res.json(data));
    db.aggregate(
      [ {$project: { items: 1 } }, {$unwind: "$items"}, {$group: {_id: "$items.vendor", products: {$addToSet: "$items.category"}, sum: {$sum: 1} } } ] 
    ).toArray( (err, data) => res.send(data));
  });

  app.get("/vendorsdetails/:id", (req, res) => {
    const id = req.params.id;
    db.aggregate(
      [ {$project: { items: 1 } }, {$unwind: "$items"}, {$group: {_id: "$items.vendor", category: {$addToSet:
        "$items.category"}, products: {$addToSet: "$items.title"} } }, {$match: {_id: id}} ]
    ).toArray( (err, data) => res.send(data));
  });

  app.get("/items", (req, res) => {
    //res.setHeader('Content-Type', 'application/json');
    //db.distinct("vendors.slug", {}, (err, data) => res.json(data));
    db.aggregate(
      [{ $unwind: "$items" }, { $project: { item: "$items" } }, { $group: { _id: "$item", sum: { $sum: 1 }, finalprice: { $sum: "$item.finalprice" } } }]
    ).toArray( (err, data) => res.send(data));
  });


})
