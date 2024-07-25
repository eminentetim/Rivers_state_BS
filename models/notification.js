const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  course: { type: String, required: true },
  year: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

notificationSchema.index({ course: 1, year: 1 });

module.exports = mongoose.model('Notification', notificationSchema);

