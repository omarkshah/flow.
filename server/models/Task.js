import mongoose from 'mongoose';

const taskSchema = mongoose.Schema(
    {
        userId:{
            type: [String], 
            required: true
        },
        title:{
            type: String,
            required: true,
            max: 30,
        },
        description: {
            type: String,
            max: 500
        },
        date:{
            type: Date,
            required: true
        }
    }
)