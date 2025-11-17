const mongoose = require('mongoose');

const {OrderSchema } = require('../schemas/OrderSchema');

const WishlistModel = new mongoose.model('order', OrderSchema);

module.exports = {OrderSchema};