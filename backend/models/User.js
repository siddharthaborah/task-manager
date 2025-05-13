const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
     {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImageURL: {
            type: String,
            default: null
        },
        role: {
            type: String,
            enum: ['admin', 'member'],
            default: 'member',
            // role-based access control
            // admin: can manage all users and their data
            // member: can only manage their own data
        },
     },
     {
        timestamps: true,
     }
);

module.exports = mongoose.model('User', userSchema);
// This model defines the structure of the user data in the MongoDB database.
// It includes fields for name, email, password, profile image URL, and role.
// The role field is an enum that can be either 'admin' or 'member', with 'member' as the default value.
// The timestamps option automatically adds createdAt and updatedAt fields to the schema.
// The model is then exported for use in other parts of the application.
