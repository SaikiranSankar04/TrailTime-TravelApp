/*
const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const TrailTimeModel = require('./models/User')
const ServiceProviderModel = require('./models/ServiceProvider'); // Import the model
const app = express()
app.use(express.json())
app.use(cors())
const hotelRoutes = require("./Routes/HotelRoutes"); 
mongoose.connect("mongodb://127.0.0.1:27017/TrailTime");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    TrailTimeModel.findOne({ email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.status(200).json({ message: "Success" });
                } else {
                    res.status(401).json({ message: "The password is incorrect" });
                }
            } else {
                res.status(404).json({ message: "Email not registered. Please register to continue" });
            }
        })
        .catch(err => res.status(500).json({ message: "Server error", error: err }));
});

app.post('/register', (req, res) => {
    TrailTimeModel.create(req.body)
        .then(user => res.status(201).json(user))
        .catch(err => res.status(500).json({ message: "Error creating user", error: err }));
});
app.post('/register-service-provider', async (req, res) => {
    try {
        const { name, email, password, companyName, location } = req.body;
        const newServiceProvider = new ServiceProviderModel({
            name,
            email,
            password, // Consider hashing passwords in production!
            companyName,
            location,
        });

        await newServiceProvider.save();
        res.status(201).json({ message: 'Service provider registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering service provider', error });
    }
});
app.post('/login-service-provider', async (req, res) => {
    const { email, password } = req.body;
    try {
        const serviceProvider = await ServiceProviderModel.findOne({ email });
        if (!serviceProvider) {
            return res.status(404).json({ message: 'Email not registered. Please register.' });
        }
        if (serviceProvider.password === password) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Incorrect password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});
app.use('/api/hotels', hotelRoutes);

app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
*/
/*
// In your server.js or main backend file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const UserModel = require('./models/User'); // Update with actual path
const HotelModel=require('./models/Hotels');
const app = express();
app.use(cors());
app.use(bodyParser.json());
// Connect to MongoDB and start the server
mongoose.connect("mongodb://127.0.0.1:27017/TrailTime", { useNewUrlParser: true })
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
// Registration endpoint
app.post('/register-service-provider', async (req, res) => {
    const { name, email, password, companyName, location } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
        name,
        email,
        password: hashedPassword,
        companyName,
        location,
    });

    try {
        await newUser.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

// Login endpoint
app.post('/login-service-provider', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});
app.post('/hotels/add', async (req, res) => {
    const { name, location, description, imageUrl, amenities, serviceProviderEmail } = req.body;

    try {
        // Check if the service provider exists by email
        const serviceProvider = await UserModel.findOne({ email: serviceProviderEmail });
        if (!serviceProvider) {
            return res.status(404).json({ message: 'Service provider not found' });
        }

        const newHotel = new HotelModel({
            name,
            location,
            description,
            imageUrl,
            amenities,
            serviceProviderEmail, // Save the email for association
        });

        await newHotel.save();
        res.status(201).json({ message: 'Hotel added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding hotel', error });
    }
});

// Update an existing hotel
app.put('/update/:id', async (req, res) => {
    try {
        const updatedHotel = await HotelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json(updatedHotel);
    } catch (error) {
        res.status(500).json({ message: 'Error updating hotel', error });
    }
});

// Delete a hotel
app.delete('/delete/:id', async (req, res) => {
    try {
        const deletedHotel = await HotelModel.findByIdAndDelete(req.params.id);
        if (!deletedHotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting hotel', error });
    }
});

// Start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});

*/
// server.js
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');
const ServiceProviderModel = require('./models/ServiceProvider');
const TrailTimeModel=require('./models/User');
const HotelModel = require('./models/Hotels');
const app = express();
const generateUniqueId = require('./utils/generateUniqueId');
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/TrailTime", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

    app.post("/login", (req, res) => {
        const { email, password } = req.body;
        TrailTimeModel.findOne({ email })
            .then(user => {
                if (user) {
                    if (user.password === password) {
                        res.status(200).json({ message: "Success" });
                    } else {
                        res.status(401).json({ message: "The password is incorrect" });
                    }
                } else {
                    res.status(404).json({ message: "Email not registered. Please register to continue" });
                }
            })
            .catch(err => res.status(500).json({ message: "Server error", error: err }));
    });
    
    app.post('/register', (req, res) => {
        TrailTimeModel.create(req.body)
            .then(user => res.status(201).json(user))
            .catch(err => res.status(500).json({ message: "Error creating user", error: err }));
    });
// Register Service Provider
app.post('/register-service-provider', async (req, res) => {
    const { name, email, password, companyName, location } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const uniqueId = generateUniqueId();
    const newServiceProvider = new ServiceProviderModel({
        name,
        email,
        password: hashedPassword,
        companyName,
        location,
        uniqueId
    });

    try {
        await newServiceProvider.save();
        res.status(201).json({ message: 'Registration successful', uniqueId });
    } catch (error) {
        res.status(500).json({ message: 'Error registering service provider', error });
    }
});

// Login Service Provider
app.post('/login-service-provider', async (req, res) => {
    const { email, password } = req.body;

    try {
        const serviceProvider = await ServiceProviderModel.findOne({ email });
        if (!serviceProvider) {
            return res.status(404).json({ message: 'Email not registered. Please register.' });
        }

        const isMatch = await bcrypt.compare(password, serviceProvider.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});
app.post('/add', async (req, res) => {
    try {
        const { name, location, description, imageUrl, amenities, serviceProviderId } = req.body;
        const hotelUniqueId = await generateUniqueId(); // Generate a unique 5-digit ID

        const newHotel = new HotelModel({
            name,
            location,
            description,
            imageUrl,
            amenities: amenities.split(',').map(item => item.trim()), // Convert amenities to an array
            serviceProviderId,
            hotelUniqueId,
        });

        await newHotel.save();
        res.status(201).json(newHotel);
    } catch (error) {
        console.error('Error adding hotel:', error);
        res.status(500).json({ message: 'Failed to add hotel.' });
    }
});
app.get('/hotel/:serviceProviderId', async (req, res) => {
    try {
      const { serviceProviderId } = req.params;
      
      // Check if the serviceProviderId is valid
      if (!mongoose.Types.ObjectId.isValid(serviceProviderId)) {
        return res.status(400).json({ error: 'Invalid service provider ID' });
      }
      
      // Find hotels associated with the serviceProviderId
      const hotels = await hotels.find({ serviceProviderId });
      if (!hotels) {
        return res.status(404).json({ error: 'No hotels found' });
      }
      
      res.json(hotels);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      res.status(500).json({ error: 'Failed to fetch hotels.' });
    }
  });  
  // Delete a hotel
  app.delete('/hotel/:id', async (req, res) => {
    try {
      await hotels.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: 'Hotel deleted successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete hotel.' });
    }
  });
// Start the server
app.listen(3001, () => {
    console.log('Server running on http://localhost:3001');
});
