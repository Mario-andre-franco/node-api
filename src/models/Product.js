const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

//create schema for db
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

//paginate
ProductSchema.plugin(mongoosePaginate)

mongoose.model("Product", ProductSchema)