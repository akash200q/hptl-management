const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./mongo');  // Import MongoDB connection

// Initialize the Express app
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Define the Doctor model
const DoctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    experience: { type: Number, required: true },
    availability: { type: String, required: true },
});
const Doctor = mongoose.model('Doctor', DoctorSchema);

// Define the Appointment model
const AppointmentSchema = new mongoose.Schema({
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    patientName: { type: String, required: true },
    patientEmail: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    reason: { type: String, required: true },
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);

// API Routes

// Sample route to check server is running
app.get('/', (req, res) => {
    res.send('Hospital Management System API is working!');
});

// Route to get all doctors
app.get('/api/doctor/list', async (req, res) => {
    try {
        const doctors = await Doctor.find(); // Fetch all doctors from the database
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch doctors' });
    }
});

// Route to add a new doctor
app.post('/api/doctor/add', async (req, res) => {
    const { name, specialization, email, phone, experience, availability } = req.body;

    try {
        const newDoctor = new Doctor({ name, specialization, email, phone, experience, availability });
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor added successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add doctor' });
    }
});

// Route to book an appointment
app.post('/api/appointments/book', async (req, res) => {
    const { doctorId, patientName, patientEmail, date, time, reason } = req.body;

    try {
        const newAppointment = new Appointment({
            doctor: doctorId,
            patientName,
            patientEmail,
            date,
            time,
            reason,
        });
        await newAppointment.save();
        res.status(201).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to book appointment' });
    }
});

// Route to get all appointments for a specific doctor
app.get('/api/appointments/doctor/:doctorId', async (req, res) => {
    const { doctorId } = req.params;

    try {
        const appointments = await Appointment.find({ doctor: doctorId }).populate('doctor');
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch appointments' });
    }
});

// Set up the server to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
