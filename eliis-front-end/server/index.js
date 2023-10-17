const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs/promises'); // Using fs.promises for async/await
const rateLimit = require('express-rate-limit');

const app = express();
const port = process.env.PORT || 3001;
const DATABASE_FILE = 'myDatabase.json';

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Define a rate limiter (adjust options as needed)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Apply the rate limiter to all routes starting with '/add'
app.use('/add', limiter);

// Define a route to add an event
app.post('/addEvent', async (req, res) => {
  try {
    const eventData = req.body;

    // Read existing data from the file
    const currentData = await fs.readFile(DATABASE_FILE, 'utf-8');
    const parsedData = JSON.parse(currentData);

    // Add the new event to the data
    parsedData.events[eventData.id] = eventData;

    // Write the updated data back to the file
    await fs.writeFile(DATABASE_FILE, JSON.stringify(parsedData, null, 2));

    res.send('Event added successfully');
  } catch (error) {
    res.status(500).send('Error adding event to the database');
  }
});

// Define a route to get all events
app.get('/getEvents', (req, res) => {
    try {
        const events = db.getData('/events'); // Assuming db is your JsonDB instance
        console.log('Retrieved events:', events);
        res.json(events);
    } catch (error) {
        console.error('Error fetching events from the database:', error);
        res.status(500).send('Error fetching events from the database');
    }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
