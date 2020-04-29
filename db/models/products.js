const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
})

module.exports = mongoose.model('Product', ProductSchema)
