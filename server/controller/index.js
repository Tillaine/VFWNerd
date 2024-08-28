console.log('in')
// Router
const express = require('express');
const router = express.Router();
const database = require('../model/mockData');


// models 
const getItems = (req, res) => {
    // /get items from mockData
    //send in response 
      const Items = database
      console.log(Items)
      
        res.status(201).json({ Items })

      
    //  if err respond to client
  
  }


// controllers 
router.get('/api/AllState', getItems)
//Update
// router.put('/', controller.updateItem)

// router.delete('/', controller.getAllIdeas)
// //Post new Idea


module.exports= {getItems}