const mongoose = require('mongoose');
const { UserSchema, PostsSchema, HubsSchema } = require('./schemas');

const Users = mongoose.model('Users', UserSchema);
const Posts = mongoose.model('Posts', PostsSchema);
const Hubs = mongoose.model('Hubs', HubsSchema);

/* USERS */

const getAllUsers = () => {
    return Users.find().lean();
}

const getUsers = (filter) => {
    if(!filter) return getAllUsers()
    return Users.find(filter).lean();
}

const createNewUser = async (user) => {   
    const doesExists = await Users.findOne({ $or: [{nickname: user.nickname}, {email: user.email}]})
    
    if(doesExists) {
        throw ("This user already exists");
    }
    
    return Users.create(user);
}

/* POSTS */
const getAllPosts = () => {
    return Posts.find().lean();
}

const getPosts = (filter) => {
    if(!filter) return getAllPosts();
    
    return Posts.find(filter).lean();
}

const createNewPost = async (post) => {
    const newPost = await Posts.create(post);
    await addPostToHub(newPost);
    return newPost;
}


/* HUBS */
const getAllHubs = () => {
    return Hubs.find().lean();
}

const getHubs = (filter) => {
    if(!filter) return getAllHubs()

    return Hubs.find(filter).lean()
}

const createNewHub = (hub) => {
    return Hubs.create(hub);
}

const addPostToHub = async (post) => {
    let hub = await getHubs({title: post.hub});
    if(hub.length === 0 ) {
        return createNewHub({title: post.hub, creator: post.author, mods: [post.author], posts: [post]})
    }
    return Hubs.findOneAndUpdate(hub, {$push: {posts: post}}).lean()
}


const deleteAll = async () => {
    await Hubs.deleteMany({});
    await Posts.deleteMany({}); 
}

module.exports = {
    connect: function(dbUrl) {
        mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true});
    },
    createNewUser,
    getUsers,
    getPosts,
    createNewPost,
    getHubs,
    createNewHub,
    deleteAll,

}

