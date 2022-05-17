const mongoose = require('mongoose')
const Schema = mongoose.Schema

const poleMove = new Schema(
    {
        name: { type: String, required: true },
        isStatic: { type: Boolean, required: true },
        isSpinny: { type: Boolean, required: true },
        difficultyLevel: { 
            type: String, 
            enum: {
                values:['Beginner', 'Intermediate', 'Advanced'], 
                message: '{VALUE} is not supported please choose from Beginner, Intermediate, or Advanced'
            }, 
            required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('polemoves', poleMove)