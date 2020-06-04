const multer = require('fastify-multer')

const postControllers = require('./controllers/post.controller')
const userControllers = require('./controllers/user.controller')
const multerConfig = require('./middleware/multer.middleware')

module.exports = fastify => {
    // GETS ALL POSTS
    fastify.post('/api/v1/posts', multer(multerConfig).single("picture"), postControllers.create)
    fastify.delete('/api/v1/posts/:id', postControllers.destroy)
    fastify.get('/api/v1/posts', postControllers.getAll)

    // USER MODEL
    fastify.post('/api/v1/register', userControllers.register)
    fastify.post('/api/v1/login', userControllers.login)
}
