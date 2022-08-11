import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const posts = await prisma.post.findMany({
        where: {
            owner: {
                followers: {
                    some: {
                        followerId: 'cl6pijwj50000pghjt0002chp',
                    },
                },
            },
        },
    })

    console.log(posts)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
