const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = class Controller {
    // TEST ROUTE
    static async testRoute(request, reply) {
        reply.send({ 'home': 'mendes' })
    }

    // DELETES A POST
    static async destroy(request, reply) {
        const { id } = request.params
        const post = await prisma.post.delete({
            where: {
                id: id,
            },
        })
        reply.send(post)
    }

    // CREATES A NEW POST
    static async create(request, reply) {
        const result = await prisma.post.create({
            data: {
                name: request.body.name,
                openClose: request.body.openClose,
                slogan: request.body.slogan,
                content: request.body.content,
                picture: request.body.picture,
                phone: request.body.phone,
                website: request.body.website,
                location: request.body.location,
                eventEmail: request.body.eventEmail,
                author: { connect: { email: request.body.authorEmail } },
            },

        })
        reply.send(result)
    }

    // GETS ALL POSTS (FEED)
    static async getAll(request, reply) {
        const posts = await prisma.post.findMany()
        reply.send(posts)
    }
}
