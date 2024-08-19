const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

router.post('/updateProfile', async (req, res) => {
    const { hospitalName, userID, email, address, hospitalInfo } = req.body;

    try {
        await User.findOneAndUpdate({ email }, { hospitalName, userID, email, address, hospitalInfo });
        res.status(200).send('Profile updated successfully');
    } catch (err) {
        console.error('Error updating profile:', err);
        res.status(500).send('Error updating profile');
    }
});

router.post('/generateHospitalID', async (req, res) => {
    const { email } = req.body;
    const hospitalID = crypto.randomBytes(4).toString('hex');

    try {
        await User.findOneAndUpdate({ email }, { hospitalID });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Hospital ID',
            text: `Your Hospital ID is ${hospitalID}`
        };

        transporter.sendMail(mailOptions, (error) => {
            if (error) {
                console.error('Error sending email:', error);
                res.status(500).send('Error sending email');
            } else {
                res.status(200).send('Hospital ID sent to email');
            }
        });
    } catch (err) {
        console.error('Error generating hospital ID:', err);
        res.status(500).send('Error generating hospital ID');
    }
});

router.post('/signup', async (req, res) => {
    const { name, username, email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            res.status(500).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        res.status(201).json({ success: true, user: savedUser });
    } catch (err) {
        console.error('Error during signup:', err);
        res.status(500).json({ success: false, message: 'Error during signup' });
    }
});


router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        console.log(username, password)
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }
        res.json({
            success: true,
            user: {
                id: user._id,
                email: user.email,
            },
        });
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ success: false, message: 'Server error during login' });
    }
});

module.exports = router;