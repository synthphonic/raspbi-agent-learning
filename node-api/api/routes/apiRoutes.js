'use strict';
module.exports = function(app) {

var bookingList = require('../controllers/bookingController');
var barberList = require('../controllers/barberShopController')
var userList = require('../controllers/userController')

app.route('/bookings')
    .get(bookingList.list_all_bookings)
    .post(bookingList.create_a_booking)

    app.route('/users')
    .get(userList.list_all_users)
    .post(userList.create_a_user)

app.route('/booking')
    .get(bookingList.read_a_booking)
    .put(bookingList.update_a_booking)
    .delete(bookingList.delete_a_booking);

app.route('/barberShops')
    .get(barberList.list_all_barbers)
    .post(barberList.create_a_barber)

app.route('/barberShops/:_id')
    .get(barberList.read_a_barber)
    .put(barberList.update_a_barber)
    .delete(barberList.delete_a_barber);
 };