// const express = require('express');
// const Topic = require('../models/topic');

// const router = express.Router();

// // GET all topics
// router.get('/', async (req, res) => {
//   try {
//     const topics = await Topic.find();
//     res.json(topics);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // POST create a new topic
// router.post('/', async (req, res) => {
//   const { title } = req.body;

//   try {
//     const topic = new Topic({ title });
//     await topic.save();
//     res.status(201).json(topic);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Topic route is working!');
});

module.exports = router;
