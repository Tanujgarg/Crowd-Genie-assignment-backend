const mongoose = require("mongoose")
const Schema = mongoose.Schema


const durationSchema = new Schema({
    value: Number,
    units: {
        type: String,
        default: "MONTHS"
    }
})

const applicationSchema = new Schema({
    _userId: Schema.Types.ObjectId,
    amount: Number,
    currency: {
        type: String,
        default: "INR"
    },
    gracePeriod: durationSchema,
    loanType: String,
    interestRate: Number,
})