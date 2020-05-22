const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const hubRouter = require('./routes/hub');

module.exports = {
    setRoutes: function(app) {
        app.use('/user', userRouter);
        app.use('/post', postRouter);
        app.use('/hub', hubRouter);
    }
}