'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
  customer_name: {
    type: String,
    required: 'Kindly enter the number of booking'
  },
  customer_phoneNumber: {
    type: Number,
    required: 'Kindly enter the number of booking'
  },
  booking_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var BarberShopschema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of barber shop'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  latitude:{
    type: Number  
  },
  longitude:{
    type: Number  
  },
  address:{
    type: String,
    required: 'Kindly enter the address of barber shop'
  },
  owner_name:
  {
    type: String,
  }
});

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of user'
  },
  email: {
    type: String,
    required: 'Kindly enter the user email'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Bookings', BookingSchema);
module.exports = mongoose.model('BarberShops', BarberShopschema);
module.exports = mongoose.model('Users', UserSchema);
  
