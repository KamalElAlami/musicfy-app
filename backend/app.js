const { PrismaClient } = require('./generated/prisma');

const prisma = new PrismaClient();


async function main()
{
    const user = await prisma.songs.create({
        data:{
            spotifyId: "jdshlakh",
            title: "tirachrach",
            artist: "skavandri",
            genre: "musicadzb",
            album: "14",
        }
    });
    console.log(user);
}

main().catch(console.error).finally(() => prisma.$disconnect());