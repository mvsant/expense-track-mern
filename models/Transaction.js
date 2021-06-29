const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim:true,
        required: [true, 'Please insert some text.']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative numeric value.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction',TransactionSchema);