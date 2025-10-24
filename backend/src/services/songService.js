import prisma from '../prisma/client.js'

async function findAllSongs()
{
    return (await prisma.songs.findMany());
}

async function findSongById(id)
{
    return (await prisma.songs.findUnique({where: {id: id}}));
}

async function createSong(data)
{
    const song = await prisma.songs.create({
        data: {
            spotifyId: data.spotifyId,
            title: data.title,
            artist: data.artist,
            genre: data.genre,
            album: data.album,
        },
    });
    return song;
}

async function updateSong(id, data)
{
    const song = await prisma.songs.update({
        where: {
            id: id,
        },
        data: {
            spotifyId: data.spotifyId,
            title: data.title,
            artist: data.artist,
            genre: data.genre,
            album: data.album,
        },
    })
    return song;
}

async function deleteSong(id)
{
    const song = await prisma.songs.delete({
        where: {
            id: id,
        },
    });
    return song;
}


export default {
  findAllSongs,
  findSongById,
  createSong,
  updateSong,
  deleteSong
}