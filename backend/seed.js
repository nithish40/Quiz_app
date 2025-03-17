const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const User = require('./models/users');
const Topic = require('./models/topic');
const Subtopic = require('./models/subtopic');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB for Seeding'))
  .catch((err) => console.error('MongoDB connection error:', err));

const seedData = async () => {
  try {
    // Clear existing data (optional)
    await User.deleteMany({});
    await Topic.deleteMany({});
    await Subtopic.deleteMany({});

    // Insert Users
    const users = await User.insertMany([
      { name: 'sathwik', email: 'sathwik2105@gmail.com', password: 'sathwik123', progress: 'Intermediate', extraCourses: ['Python', 'JavaScript'] },
      { name: 'boaz', email: 'boaz@gmail.com', password: 'boaz0099', progress: 'advanced', extraCourses: ['Java', 'React'] },
    ]);

    console.log('Users Seeded:', users);

    // Insert Topics
    const topics = await Topic.insertMany([
      { name: 'Computer Networks' },
      { name: 'Algorithms' },
      { name: 'Data Structures' },
      { name: 'Operating Systems' },
      { name: 'Software Engineering' },
      { name: 'Web Development' },
      { name: 'Machine Learning' },
      { name: 'Automata Theory' },
      { name: 'Object-Oriented Programming' },
      { name: 'Databases' },
      { name: 'Computer Architecture' },
    ]);

    console.log('Topics Seeded:', topics);

    // Insert Subtopics (for each topic)
    const subtopics = await Subtopic.insertMany([
      { topicId: topics[0]._id, name: 'TCP/IP' },
      { topicId: topics[0]._id, name: 'OSI Model' },
      { topicId: topics[1]._id, name: 'Sorting Algorithms' },
      { topicId: topics[1]._id, name: 'Graph Algorithms' },
      { topicId: topics[2]._id, name: 'Arrays' },
      { topicId: topics[2]._id, name: 'Linked Lists' },
      { topicId: topics[3]._id, name: 'Memory Management' },
      { topicId: topics[3]._id, name: 'Process Scheduling' },
      { topicId: topics[4]._id, name: 'Software Development Life Cycle' },
      { topicId: topics[4]._id, name: 'Agile Methodology' },
      { topicId: topics[5]._id, name: 'HTML Basics' },
      { topicId: topics[5]._id, name: 'React Framework' },
      { topicId: topics[6]._id, name: 'Linear Regression' },
      { topicId: topics[6]._id, name: 'Decision Trees' },
      { topicId: topics[7]._id, name: 'Finite Automata' },
      { topicId: topics[7]._id, name: 'Context-Free Grammars' },
      { topicId: topics[8]._id, name: 'Classes and Objects' },
      { topicId: topics[8]._id, name: 'Polymorphism' },
      { topicId: topics[9]._id, name: 'SQL Queries' },
      { topicId: topics[9]._id, name: 'Normalization' },
      { topicId: topics[10]._id, name: 'Cache Memory' },
      { topicId: topics[10]._id, name: 'Pipelining' },
    ]);

    console.log('Subtopics Seeded:', subtopics);

    console.log('Database Seeding Completed!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Seeding Error:', err);
  }
};

seedData();
