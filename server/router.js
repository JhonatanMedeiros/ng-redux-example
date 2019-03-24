'use strict';

const express = require('express');
const low = require('lowdb');
const path = require('path');
const storage = require('lowdb/adapters/FileSync');
const uuid = require('node-uuid');

const adapter = new storage(path.join(__dirname, 'db.json'));
const db = low(adapter);

// const db = low(path.join(__dirname, 'db.json'), {storage});
//db.set('todos', []).value(); //comment this line to load sample tasks from db

const router = new express.Router();
module.exports = router;

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, DELETE, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Accept, Content-Type, Origin, X-Requested-With');
  next();
});

router.post('/todos', (req, res) => {
  let data = req.body;
  data.id = uuid.v4();
  let todo = db.get('todos').push(data).last().value();
  res.status(200).json(todo);
});

router.get('/todos', (req, res) => {
  res.status(200).json(db.get('todos').value());
});

router.get('/todos/:id', (req, res) => {
  res.status(200);
});

router.put('/todos/:id', (req, res) => {
  let id = req.params.id;
  let todo = db.get('todos').find({id}).assign(req.body).value();
  res.status(200).json(todo);
});

router.delete('/todos/:id', (req, res) => {
  let id = req.params.id;
  let todo = db.get('todos').find({id}).value();
  db.get('todos').remove({id}).value();
  res.status(200).json(todo);
});
