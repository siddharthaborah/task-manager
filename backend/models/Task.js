const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
});

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        descrioption: {
            type: String
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            default: 'Medium',
        },
        status: {
            type: String,
            enum: ['Pending', 'In Progress', 'Completed'],
            default: 'Pending',
        },
        dueDate: {
            type: Date,
            required: true,
        },
        assignedTo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }, 
        atachments: [
            {
                type: String,
            },
        ],

        todoChecklist: [todoSchema],

        progress: {
            type: Number,
            default: 0,
        },
    },
        {timestamps: true}        
);

module.exports = mongoose.model('Task', taskSchema);
// This model defines the structure of the task data in the MongoDB database.
// It includes fields for title, description, priority, status, due date, assigned user, created user, attachments, todo checklist, and progress.
// The priority field is an enum that can be either 'low', 'medium', or 'high', with 'medium' as the default value.
// The status field is an enum that can be either 'Pending', 'In Progress', or 'Completed', with 'Pending' as the default value.
// The todoChecklist field is an array of objects, each containing a text field and a completed field.
// The progress field is a number that represents the progress of the task, with a default value of 0.
// The model is then exported for use in other parts of the application.
// The timestamps option automatically adds createdAt and updatedAt fields to the schema.
// The model is then exported for use in other parts of the application.