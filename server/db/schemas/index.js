const mongoose = require('mongoose');

/* REMOVE _ids */

const UserSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: [true, "Nickname is required"],
        unique: true,
        
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    dateCreated: {
        type: Date,
        required: [true, "Date Created is required"],
        default: Date.now
    },
    profilePic: {
        type: String,
    },
})

const PostsSchema = new mongoose.Schema({
    author: {
        type: String,
        required: [true, "Author is required"]
    },
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true, 
    },
    hub: {
        type: String,
        required: [true, "Hub name in Post document is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },
    rating: {
        type: Number,
        default: 0
    },
    Comments: [
        {
            content: {
                type: String,
                required: [true, "Content is required"]
            },
            rating: {
                type: Number,
                default: 0
            }
        }
    ]
})

const HubsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: true,
    },
    creator: {
        type: String,
        required: [true, "Creator is required"]
    },
    mods: {
        type: Array
    },
    posts: {
        type: Array
    }
})

module.exports = {UserSchema, PostsSchema, HubsSchema}